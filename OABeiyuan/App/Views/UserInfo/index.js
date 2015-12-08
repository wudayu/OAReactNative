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
// Styles
var styles = require('./style');

var UserInfoView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomePanel}>
          <Image
            style={styles.welcomeIcon}
            source={require('image!icon_avatar_login_ac')}
          />
          <Text style={styles.welcomeText}
            onPress={() => this.props.navigator.pop()}>
            用户信息
          </Text>
        </View>
      </View>
    );
  },
});

module.exports = UserInfoView;