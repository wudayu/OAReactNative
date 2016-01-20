'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');

var {
  Text,
  View,
  Image,
} = React;

// Strings
var Strings = require('../../Values/string');
// Utils
var netHandler = require('../../Utils/net');
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var FormItem = require('./Elements/FormItem'); // 本页面详情表单项
// Styles
var styles = require('./style');

var testValue;
var UserInfoView = React.createClass({
  getDefaultProps: function() {
    // TODO remove this, it's example
    store.get('finalValue').then((finalValue) => {
      testValue = finalValue.auditTypes[0].typeName;
    });
  },
  getInitialState: function() {
    return {
      editing : false,
    };
  },
  // TODO remove this, it's example
  _testFinal: function() {
    utilHandler.show(testValue);
    //netHandler.getUserList(1, 5)
    //  .then((response) => response.json())
    //  .then((responseJson) => netHandler.handleResponse(responseJson, this.props.navigator))
    //  .then((responseData) => {
    //    utilHandler.show(responseData);
    //  }).catch((error) => {
    //});
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
        <View style={styles.userBasicInfoPanel}>
          <Image
            style={styles.userIcon}
            source={require('image!icon_avatar_login_ac')}
          />
          <View style={styles.basicInfoPanel}>
            <Text style={styles.userNameText}>
              {this.props.route.name}
            </Text>
            <Text style={styles.userDeptText}>
              部门：{this.props.route.deptName}
            </Text>
          </View>
        </View>
        <View style={styles.funcPanel}>
          <AppNoRadiusButton
            text={Strings.btnLeaveText}
            style={styles.funcLeftBtn}
            onPress={this._testFinal}
          />
          <AppNoRadiusButton
            text={Strings.btnWorklateText}
            style={styles.funcRightBtn}
            onPress={() => this.props.navigator.push({title: Strings.titleWorklateList, id: 'WorklateList'})}
          />
        </View>
        <View style={styles.userDetailPanel}>
          <FormItem
            style={styles.formItem}
            mapKey='mobile'
            title={Strings.promptMobile}
            mapValue={this.props.route.mobile}
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='email'
            title={Strings.promptEmail}
            mapValue={this.props.route.email}
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            mapKey='address'
            title={Strings.promptAddress}
            mapValue={this.props.route.address}
            editable={this.state.editing}
          />
          {buttons}
        </View>
      </View>
    );
  }
});

module.exports = UserInfoView;