'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
} = React;

// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var FormItem = require('./Elements/FormItem') // 本页面详情表单项
// Styles
var styles = require('./style');

var UserInfoView = React.createClass({
  getInitialState: function() {
    return {
      editing : false,
    };
  },
  render: function() {
    var buttons = null;
    if (this.state.editing) {
      buttons = <View style={styles.editingBtnPanel}>
        <AppNegButton
          text="提交更改"
          style={styles.editingBtn}
          />
        <AppNegButton
          text="取消更改"
          onPress={() => this.setState({editing : false})}
          style={styles.editingBtn}
          />
      </View>
    } else {
      buttons = <AppButton
        style={styles.editBtn}
        text='编辑'
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
              吴大宇
            </Text>
            <Text style={styles.userDeptText}>
              部门：电商事业部
            </Text>
          </View>
        </View>
        <View style={styles.funcPanel}>
          <AppNoRadiusButton
            text='请假详情'
            style={styles.funcLeftBtn}
          />
          <AppNoRadiusButton
            text='加班详情'
            style={styles.funcRightBtn}
          />
        </View>
        <View style={styles.userDetailPanel}>
          <FormItem
            style={styles.formItem}
            id='mobile'
            title='手机'
            value='18651817673'
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            id='email'
            title='电子邮件'
            value='wudayu@gmail.com'
            editable={this.state.editing}
          />
          <FormItem
            style={styles.formItem}
            id='address'
            title='居住地址'
            value='江苏省南京市玄武区东南大学'
            editable={this.state.editing}
          />
          {buttons}
        </View>
      </View>
    );
  },
});

module.exports = UserInfoView;