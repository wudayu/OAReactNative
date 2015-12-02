'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TextInput,
} = React;

// Views
// Styles
var styles = require('./style');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('default', false): null;

var OABeiyuan = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomePanel}>
          <Text style={styles.welcomeText}>
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
      </View>
    );
  }
});

AppRegistry.registerComponent('OABeiyuan', () => OABeiyuan);
