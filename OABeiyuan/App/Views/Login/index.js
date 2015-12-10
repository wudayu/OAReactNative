'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  Platform,
  AlertIOS,
} = React;

// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppCheckBox = require('../Elements/AppCheckBox');
// Styles
var styles = require('./style');

var LoginView = React.createClass({
  _onTypingUserName: function(text: Object) {
    this.setState({
      userName: text.text,
    });
  },
  _onTypingUserPwd: function(text: Object) {
    this.setState({
      userPwd: text.text,
    });
  },
  getInitialState: function() {
    return {
      userName: null,
      userPwd: null,
      remPwd: null,
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomePanel}>
          <Image
            style={styles.welcomeIcon}
            source={require('image!icon_avatar_login_ac')}
          />
          <Text style={styles.welcomeText}>
            请登录
          </Text>
        </View>
        <View style={styles.inputPanel}>
          <View style={styles.inputRow}>
            <Image
              style={styles.inputImg}
              source={require('image!icon_username_login_ac')}
            />
            <TextInput
              style={styles.textInput}
              placeholder='请输入账号'
              underlineColorAndroid='transparent'
              onChangeText={(text) => this._onTypingUserName({text})}
              value={this.state.userName}
              />
          </View>
          <View style={styles.colSeparator} />
          <View style={styles.inputRow}>
            <Image
              style={styles.inputImg}
              source={require('image!icon_userpw_login_ac')}
            />
            <TextInput
              style={styles.textInput}
              placeholder='请输入密码'
              //secureTextEntry="true"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this._onTypingUserPwd({text})}
              value={this.state.userPwd}
              />
          </View>
        </View>
        <View style={styles.remPwdPanel}>
          <AppCheckBox
            text='记住密码'
            checked={this.state.remPwd}
            onPress={(checked) => this.setState({remPwd : checked})}
          />
        </View>
        <View style={styles.loginBtnPanel}>
          <AppButton
            text="登录"
            onPress={this.onPressLogin}
          />
        </View>
        <View style={styles.userOptionPanel}>
          <AppNegButton
            text="忘记密码？"
            onPress={this.onPressLogin}
            style={styles.appNegButton}
          />
          <AppNegButton
            text="联系管理员"
            onPress={this.onPressLogin}
            style={styles.appNegButton}
          />
        </View>
      </View>
    );
  },
  onPressLogin: function() {
    this.props.navigator.push({title: '个人信息', id: 'UserInfo'})
  },
});

module.exports = LoginView;
