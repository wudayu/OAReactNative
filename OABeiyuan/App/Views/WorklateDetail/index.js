/**
 * 本界面既作为"添加加班界面"也同时作为"修改加班信息界面"
 */
'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');

var {
  View,
  ScrollView,
  Platform,
  AlertIOS,
  ToastAndroid,
} = React;

// Strings
var Strings = require('../../Values/string');
// Utils
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var FormItem = require('./Elements/FormItem'); // 加班详情表单项
// Styles
var styles = require('./style');

var _worklateId;
/**
 * 根据是否传入worklateId来判断是否是修改界面
 *
 * @returns {boolean}, true => 是修改界面
 */
function isEditUi() {
  return (_worklateId != null);
}

var WorklateDetailView = React.createClass({
  getInitialState: function() {
    // 此赋值语句必不可少
    _worklateId = this.props.route.worklateId;

    // TODO remove this, is an Example
    if (isEditUi()) {
      if (Platform.OS === 'ios')
        AlertIOS.alert(
          'Welcome',
          'worklateId : ' + _worklateId,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed!')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
          ]
        );
      else
        ToastAndroid.show('worklateId : ' + _worklateId, ToastAndroid.LONG);
    }

    return {
      editing : false,
    };
  },
  render: function() {
    var buttons = null;
    if (this.state.editing) {
      buttons = <View style={styles.editingBtnPanel}>
        <AppNegButton
          text={Strings.btnCommitChangeText}
          style={styles.editingBtn}
          />
        <AppNegButton
          text={Strings.btnCancelChangeText}
          onPress={() => this.setState({editing : false})}
          style={styles.editingBtn}
          />
      </View>
    } else {
      buttons = <AppButton
        style={styles.editBtn}
        text={Strings.btnEditText}
        onPress={() => this.setState({editing : true})}
      />
    }

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <FormItem
            style={styles.formItem}
            mapKey='type'
            title={Strings.textWorklateType}
            mapValue='事假'
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='applier'
            title={Strings.textWorklateApplier}
            mapValue='吴大宇'
            editable={this.state.editing}
          />
          <FormItem
            style={[styles.formItem, styles.textArea]}
            mapKey='reason'
            title={Strings.textWorklateReason}
            mapValue='家里有事需要回家'
            multiline={true}
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='beginTime'
            title={Strings.textWorklateBeginTm}
            mapValue='09月11日 13:00'
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='endTime'
            title={Strings.textWorklateEndTm}
            mapValue='09月12日 13:00'
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='auditStatus'
            title={Strings.textWorklateAuditStatus}
            mapValue='正在审核'
            editable={this.state.editing}
          />
          {buttons}
        </ScrollView>
      </View>
    );
  }
});

module.exports = WorklateDetailView;