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
      </View>
    );
  },
});

module.exports = UserInfoView;