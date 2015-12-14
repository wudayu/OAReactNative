'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('./App/Values/colors');
var Dimens = require('./App/Values/dimens');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  statusBar: {
    height: Dimens.statusBarHeight,
    backgroundColor: Colors.appColor,
  },
  navBar: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  toolBar: {
    backgroundColor: Colors.appColor,
    height: Dimens.topBarMargin,
  },
});
