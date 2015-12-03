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
// Styles
var styles = require('./style');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;

var OABeiyuan = React.createClass({
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
        <View style={styles.input}>
          <View style={styles.inputRow}>
            <Image
              style={styles.inputImg}
              source={require('image!icon_username_login_ac')}
            />
            <TextInput style={styles.textInput} placeholder='请输入账号' underlineColorAndroid='transparent' />
          </View>
          <View style={styles.colSeparator} />
          <View style={styles.inputRow}>
            <Image
              style={styles.inputImg}
              source={require('image!icon_userpw_login_ac')}
            />
            <TextInput style={styles.textInput} placeholder='请输入密码' underlineColorAndroid='transparent' />
          </View>
        </View>
        <View style={styles.loginBtnPanel}>
          <AppButton text="登录" onPress={this.onPressLogin} />
        </View>
        <View>
        </View>
      </View>
    );
  },
  onPressLogin: function() {
    if (Platform.OS === 'ios') {
      AlertIOS.alert(
        'Welcome',
        'Login...',
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
