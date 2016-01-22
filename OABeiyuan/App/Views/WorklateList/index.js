'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');
var GiftedListView = require('react-native-gifted-listview');

var {
  View,
} = React;

// Strings
var Strings = require('../../Values/string');
var netHandler = require('../../Utils/net');
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var ListItem = require('./Elements/ListItem'); // 本页面列表项
// Styles
var styles = require('./style');

let PAGE_SIZE = 10;

var userId = null;
var token = null;
// 加班类型数组
var itemTypes = null;

var WorklateView = React.createClass({
  getDefaultProps: function() {
    store.get('userBasic').then((userBasic) => {
      userId = userBasic.userId;
      token = userBasic.token;
    });
    store.get('finalValue').then((finalValue) => {
      itemTypes = finalValue.worklateTypes;
    });
  },
  /**
   * 会在刷新时调用(第一次调用也是刷新)
   *
   * @param {number} page, 查询第几页
   * @param {function} callback, 传递数据数组到callback函数
   * @param {object} options, 第一次加载的选项
   */
  onFetchData: function(page = 1, callback, options) {
    netHandler.getWorklateList(userId, token, userId, -1, 1, PAGE_SIZE)
      .then((response) => response.json())
      .then((responseJson) => netHandler.handleResponse(responseJson, this.props.navigator))
      .then((responseData) => {
        if (responseData == null)
          return null;

        callback(responseData, {
          allLoaded: responseData.length < PAGE_SIZE, // 无更多数据时,改为true
        });
      }).catch((error) => {
      // 出错处理
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        {this.renderGiftedView()}
      </View>
    );
  },
  renderGiftedView: function() {
    return (
      <GiftedListView
        rowView={this.renderRowView}
        onFetch={this.onFetchData}
        firstLoader={true} // 显示第一次加载Loader(加载动画)
        pagination={true} // 开启无限加载下一页
        refreshable={true} // 开启下拉刷新
        withSections={false} // 关闭sections
        refreshableDistance={30}
        customStyles={{
          refreshableView: {backgroundColor: '#eee'}
        }}
        PullToRefreshViewAndroidProps={{
          colors: ['#ff0000', '#00ff00', '#0000ff'],
          progressBackgroundColor: '#c8c7cc',
        }}
      />
    );
  },
  renderRowView: function(worklate) {
    return (
      <ListItem
        style={styles.listItem}
        navigator={this.props.navigator}
        worklateId={worklate.id}
        type={itemTypes[worklate.overtimeType].label}
        applier={worklate.applierName}
        reason={worklate.overtimeReason}
        beginTime={utilHandler.getDateStringFromObject(new Date(worklate.applyTm))}
        lastHours={worklate.lastTm}
        auditStatus={worklate.auditStatus}
      />
    );
  },
});

module.exports = WorklateView;
