'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
} = React;

// Strings
var Strings = require('../../Values/string');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
// Styles
var styles = require('./style');

var UserInfoView = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
});

module.exports = UserInfoView;