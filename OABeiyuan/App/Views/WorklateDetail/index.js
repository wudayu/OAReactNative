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
  NativeModules,
  PickerItemIOS,
} = React;

// Strings
var Strings = require('../../Values/string');
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var DatePickerIOSWithModal = require('../Elements/DatePickerIOSWithModal'); // 系统使用Modal的DatePickerIOS
var AnimatedPickerIOS = require('../Elements/AnimatedPickerIOS') // 系统动态选择项(仅iOS)
var FormItem = require('./Elements/FormItem'); // 加班详情表单项
// Styles
var styles = require('./style');

var _worklateId;





var showtimes = [{time: '12:30'},{time: '2:30'},{time: '4:30'}, {time:'5:30'}, {time:'6:30'}, {time:'7:00'}, {time:'8:30'}];
/**
 * 根据是否传入worklateId来判断是否是修改界面
 *
 * @returns {boolean}, true => 是修改界面
 */
function isEditUi() {
  return (_worklateId != null);
}

var WorklateDetailView = React.createClass({
  _onSetBeginTm: function() {
    var beginTmStr = null;
    var _this = this;
    if (Platform.OS === 'ios') {
      this.setState({beginTmVisible: true});
    } else {
      // Android 专用日期控件,分日期和时间两次选择
      NativeModules.DateAndroid.showDatepicker(function () {}, function (year, month, day) {
        NativeModules.DateAndroid.showTimepicker(function () {}, function (hour, minute) {
          _this.setState({beginTm: new Date(year, month, day, hour, minute, 0)});
        });
      });
    }
  },
  _onSetEndTm: function() {
    var endTmStr = null;
    var _this = this;
    if (Platform.OS === 'ios') {
      this.setState({endTmVisible: true});
    } else {
      // Android 专用日期控件,分日期和时间两次选择
      NativeModules.DateAndroid.showDatepicker(function () {}, function (year, month, day) {
        NativeModules.DateAndroid.showTimepicker(function () {}, function (hour, minute) {
          _this.setState({endTm: new Date(year, month, day, hour, minute, 0)});
        });
      });
    }
  },
  getInitialState: function() {
    // 此赋值语句必不可少
    _worklateId = this.props.route.worklateId;

    // TODO remove this, is an Example
    if (isEditUi()) {
      utilHandler.show('worklateId : ' + _worklateId);
    }

    return {
      editing : false,
      beginTm : new Date(),
      endTm : new Date(),
      // iOS使用以下两个参数来控制日期选择的显示与隐藏
      beginTmVisible: false,
      endTmVisible: false,
      // iOS使用以下参数来控制单选项的显示与隐藏
      animatedPickerVisible: false,
      // 用来标志当前选中的是第几个"类型"
      currType: 0,
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

    var iOSDatepicker = null;
    if (Platform.OS === 'ios') {
      iOSDatepicker = <View>
        <DatePickerIOSWithModal
          date={this.state.beginTm}
          visible={this.state.beginTmVisible}
          mode='datetime'
          onConfirmed={(date) => this.setState({beginTm: date, beginTmVisible: false})}
          onDismiss={() => this.setState({beginTmVisible: false})}
        />
        <DatePickerIOSWithModal
          date={this.state.endTm}
          visible={this.state.endTmVisible}
          mode='datetime'
          onConfirmed={(date) => this.setState({endTm: date, endTmVisible: false})}
          onDismiss={() => this.setState({endTmVisible: false})}
        />
      </View>
    }

    var iOSAnimatedPicker = null;
    if (Platform.OS === 'ios' && this.state.animatedPickerVisible) {
      iOSAnimatedPicker = (
        <AnimatedPickerIOS
          // FIXME onConfirmed 除了消失Picker的状态外,还需要设置相应的值
          onConfirmed={() => this.setState({ animatedPickerVisible: false})}
          onValueChange={(itemIndex) => utilHandler.show("无法单向绑定picker的数据")}//this.setState({currType: itemIndex})}
          currIndex={this.state.currType}>
          {Object.keys(showtimes).map((item, itemIndex) => (
            <PickerItemIOS
              key={'_' + itemIndex}
              value={itemIndex}
              label={showtimes[item].time}
            />
          ))}
        </AnimatedPickerIOS>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <FormItem
            style={styles.formItem}
            mapKey='type'
            title={Strings.textWorklateType}
            mapValue='事假'
            editable={false}
            clickToChoose={this.state.editing}
            onPress={() => this.setState({animatedPickerVisible: true})}
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
            mapValue={utilHandler.getDateStringFromObject(this.state.beginTm)}
            editable={false}
            clickToChoose={this.state.editing}
            onPress={() => this._onSetBeginTm()}
          />
          <FormItem
            style={styles.formItem}
            mapKey='endTime'
            title={Strings.textWorklateEndTm}
            mapValue={utilHandler.getDateStringFromObject(this.state.endTm)}
            editable={false}
            clickToChoose={this.state.editing}
            onPress={() => this._onSetEndTm()}
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
        {iOSDatepicker}
        {iOSAnimatedPicker}
      </View>
    );
  }
});

module.exports = WorklateDetailView;