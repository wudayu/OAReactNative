'use strict';

var React = require('react-native');
var GiftedListView = require('react-native-gifted-listview');

var {
  View,
  } = React;

// Strings
var Strings = require('../../Values/string');
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var ListItem = require('./Elements/ListItem'); // 本页面列表项
// Styles
var styles = require('./style');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var WorklateView = React.createClass({
  /**
   * 会在刷新时调用(第一次调用也是刷新)
   *
   * @param {number} page, 查询第几页
   * @param {function} callback, 传递数据数组到callback函数
   * @param {object} options, 第一次加载的选项
   */
  onFetchData: function(page = 1, callback, options) {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData.movies, {
          allLoaded: false, // 无更多数据时,改为true
        });
      })
      .done();
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
        worklateId="我是ididid"
        type="事假"
        applier="吴大宇"
        reason="家里有事需要回家"
        beginTime="08-11"
        lastHours="3"
        auditStatus="审核通过"
      />
    );
  },
});

module.exports = WorklateView;
