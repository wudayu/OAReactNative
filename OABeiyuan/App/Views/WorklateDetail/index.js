/**
 * 本界面既作为"添加加班界面"也同时作为"修改加班信息界面"
 *
 * this.props.route.worklateId为传入的具体加班项目id
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
var AnimatedPickerIOS = require('../Elements/AnimatedPickerIOS'); // 系统动态选择项(仅iOS)
var FormItem = require('./Elements/FormItem'); // 加班详情表单项
// Styles
var styles = require('./style');

var _worklateId;

// 加班类型
var itemTypes = null;
// 审核人
var audits = null;

function getItemTypesStr() {
  var strs = new Array();
  for (var i = 0; i < itemTypes.length; ++i) {
    strs[i] = itemTypes[i].label;
  }
  return strs;
}
function getAuditsStr() {
  var auditsStrs = new Array();
  for (var i = 0; i < auditsStrs.length; ++i) {
    auditsStrs = audits[i].label;
  }
  return auditsStrs;
}

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
  /**
   *当选择了不同的'类型'事件
   */
  _onSetItemType: function(itemIndex) {
    this.setState({itemTypePickerVisible: false, confirmedType: itemIndex});
  },
  /**
   *当选择了不同的'下一级审核人'事件
   */
  _onSetAudit: function(itemIndex) {
    this.setState({auditsPickerVisible: false, confirmedAudit: itemIndex});
  },
  getDefaultProps: function() {
    // 初始化数据
    store.get('finalValue').then((finalValue) => {
      itemTypes = finalValue.worklateTypes;
      audits = finalValue.audits;
    });
  },
  getInitialState: function() {
    // 此赋值语句必不可少
    _worklateId = this.props.route.worklateId;

    return {
      editing : false,
      reason: isEditUi() ? this.props.route.reason : '',
      beginTm: isEditUi() ? this.props.route.beginTm : new Date(),
      endTm: isEditUi() ? this.props.route.endTm : new Date(),
      // iOS使用以下两个参数来控制日期选择的显示与隐藏
      beginTmVisible: false,
      endTmVisible: false,
      // iOS使用以下参数来控制单选项的显示与隐藏
      itemTypePickerVisible: false, // 类型选择框是否显示
      auditsPickerVisible: false, // 审批人选择框是否显示
      // iOS用来标志当前选中的是第几个"类型"
      currType: isEditUi() ? this.props.route.itemType : 0,
      // 用来标志当前确认使用的是第几个"类型"
      confirmedType: isEditUi() ? this.props.route.itemType : 0,
      // iOS用来标志当前选中的是第几个"下一级审批人"
      currAudit: isEditUi() ? this.props.route.auditId : 0,
      // 用来标志当前确认使用的是第几个"下一级审批人"
      confirmedAudit: isEditUi() ? this.props.route.auditId : 0,
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

    var iOSItemTypePicker = null;
    if (Platform.OS === 'ios' && this.state.itemTypePickerVisible) {
      // PickerIOS
      iOSItemTypePicker = (
        <AnimatedPickerIOS
          onConfirmed={() => this._onSetItemType(this.state.currType)}
          onValueChange={(itemIndex) => this.setState({currType: itemIndex})}
          currIndex={this.state.currType}>
          {Object.keys(itemTypes).map((item, itemIndex) => (
            <PickerItemIOS
              key={'_' + itemIndex}
              value={itemIndex}
              label={itemTypes[item].label}
            />
          ))}
        </AnimatedPickerIOS>
      );
    } else if (this.state.itemTypePickerVisible === true) {
      var _this = this;
      // PickerAndroid
      NativeModules.DialogPicker.showDialogPicker(getItemTypesStr(), null, function (object) {
        _this._onSetItemType(object.index);
      });
    }

    var iOSAuditsPicker = null;
    if (Platform.OS === 'ios' && this.state.auditsPickerVisible) {
      // PickerIOS
      iOSAuditsPicker = (
        <AnimatedPickerIOS
          onConfirmed={() => this._onSetAudit(this.state.currAudit)}
          onValueChange={(itemIndex) => this.setState({currAudit: itemIndex})}
          currIndex={this.state.currAudit}>
          {Object.keys(audits).map((item, itemIndex) => (
            <PickerItemIOS
              key={'_' + itemIndex}
              value={itemIndex}
              label={audits[item].label}
            />
          ))}
        </AnimatedPickerIOS>
      );
    } else if (this.state.auditsPickerVisible === true) {
      var _this = this;
      // PickerAndroid
      NativeModules.DialogPicker.showDialogPicker(getItemTypesStr(), null, function (object) {
        _this._onSetAudit(object.index);
      });
    }

    var auditsStatusView = null;
    if (isEditUi()) {
      auditsStatusView = <FormItem
          style={styles.formItem}
          mapKey='auditsStatus'
          title={Strings.textWorklateAuditStatus}
          mapValue='正在审核'
          editable={this.state.editing}
      />
    }

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <FormItem
            style={styles.formItem}
            mapKey='type'
            title={Strings.textWorklateType}
            mapValue={itemTypes[this.state.confirmedType].label}
            editable={false}
            clickToChoose={this.state.editing}
            onPress={() => this.setState({itemTypePickerVisible: true})}
          />
          <FormItem
            style={styles.formItem}
            mapKey='applier'
            title={Strings.textWorklateApplier}
            mapValue={isEditUi() ? this.props.route.applierName : ''}
            editable={this.state.editing}
          />
          <FormItem
            style={[styles.formItem, styles.textArea]}
            mapKey='reason'
            title={Strings.textWorklateReason}
            mapValue={this.state.reason}
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
            mapKey='audits'
            title={Strings.textWorklateAudits}
            mapValue={audits[this.state.confirmedAudit].label}
            editable={false}
            clickToChoose={this.state.editing}
            onPress={() => this.setState({auditsPickerVisible: true})}
          />
          {auditsStatusView}
          {buttons}
        </ScrollView>
        {iOSDatepicker}
        {iOSItemTypePicker}
        {iOSAuditsPicker}
      </View>
    );
  }
});

module.exports = WorklateDetailView;