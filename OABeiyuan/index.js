'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SwitchIOS,
  SwitchAndroid,
  TouchableHighlight,
  ToastAndroid,
  Platform,
  AlertIOS,
} = React;

// Elements
var AppButton = require('./App/Views/Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('./App/Views/Elements/AppNegButton'); // 系统主题镂空按钮
var AppCheckBox = require('./App/Views/Elements/AppCheckBox');
// Styles
var styles = require('./style');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;

var OABeiyuan = React.createClass({
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
  _onClickRemPwd: function(checked: Object) {
    this.setState({
      remPwd: checked.checked,
    })
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
          <Text style={styles.welcomeText} >
            欢迎使用贝源OA
          </Text>
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
              secureTextEntry="true"
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
            onPress={(checked) => this._onClickRemPwd({checked})}
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
            text="立即注册"
            onPress={this.onPressLogin}
            style={styles.appNegButton}
          />
        </View>
      </View>
    );
  },
  onPressLogin: function() {
    if (Platform.OS === 'ios') {
      AlertIOS.alert(
        'Welcome',
        'UserName = ' + this.state.userName +
          '\nUserPwd = ' + this.state.userPwd +
          '\nRemPwd = ' + this.state.remPwd,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed!')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
        ]
      );
    } else {
      ToastAndroid.show('Login...', ToastAndroid.SHORT);
    }
  },
});

AppRegistry.registerComponent('OABeiyuan', () => OABeiyuan);
