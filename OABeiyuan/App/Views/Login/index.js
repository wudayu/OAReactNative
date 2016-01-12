'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');

var {
  Text,
  View,
  Image,
  TextInput,
} = React;

// Strings
var Strings = require('../../Values/string');
// Utils
var netHandler = require('../../Utils/net');
var utilHandler = require('../../Utils/util');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppUnclickableButton = require('../Elements/AppUnclickableButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppCheckBox = require('../Elements/AppCheckBox');
// Styles
var styles = require('./style');


var LoginView = React.createClass({
  onPressLogin: function() {
    /** TODO Uncomment this
    // 将按钮置为载入状态(有耗时任务)
    this.setState({isLoading: true});
    netHandler.loginWithNameAndPwd(this.state.userName, this.state.userPwd)
      .then((response) => response.json())
      .then((responseJson) => netHandler.handleResponse(responseJson))
      .then((responseData) => {
        // 将按钮置为非载入状态(无耗时任务)
        this.setState({isLoading: false});
        if (responseData === null) {
          return null;
        }
        // 存储全局用户信息
        store.save('userBasic', {
          userId : responseData.userId,
          token : responseData.token,
        });

        // FIXME 先获取用户信息, 再跳转页面
        this.props.navigator.push({title: Strings.titleUserInfo, id: 'UserInfo'});
      }).catch((error) => {
        // 将按钮置为非载入状态(无耗时任务)
        this.setState({isLoading: false});
      });
    */
    /**
     * TODO Delete code below
     */
    this.props.navigator.push({title: Strings.titleUserInfo, id: 'UserInfo'});
  },
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
  getLoginBtn: function() {
    if (this.state.isLoading) {
      return <AppUnclickableButton
        style={styles.loginBtn}
        text={Strings.btnLoginLoadingText}
      />
    } else {
      return <AppButton
        style={styles.loginBtn}
        text={Strings.btnLoginText}
        onPress={this.onPressLogin}
      />
    }
  },
  getInitialState: function() {
    return {
      // TODO change this to null
      userName: 'admin',
      userPwd: 'admin',
      remPwd: null,
      isLoading: false,
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
              placeholder={Strings.textInputUser}
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
              placeholder={Strings.textInputPwd}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this._onTypingUserPwd({text})}
              value={this.state.userPwd}
            />
          </View>
        </View>
        <View style={styles.remPwdPanel}>
          <AppCheckBox
            text={Strings.chkRemPwdText}
            checked={this.state.remPwd}
            onPress={(checked) => this.setState({remPwd : checked})}
          />
        </View>
        <View style={styles.loginBtnPanel}>
          {this.getLoginBtn()}
        </View>
        <View style={styles.userOptionPanel}>
          <AppNegButton
            text={Strings.btnForgetText}
            style={styles.appNegButton}
          />
          <AppNegButton
            text={Strings.btnContactText}
            style={styles.appNegButton}
          />
        </View>
      </View>
    );
  }
});

module.exports = LoginView;
