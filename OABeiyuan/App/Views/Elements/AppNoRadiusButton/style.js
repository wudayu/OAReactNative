'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');
var Dimens = require('../../../Values/dimens');

module.exports = StyleSheet.create({
  btnHighLight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  btn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.appColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.white,
    fontSize: Dimens.buttonTextSize,
  },
});