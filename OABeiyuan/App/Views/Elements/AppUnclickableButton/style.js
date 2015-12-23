'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');
var Dimens = require('../../../Values/dimens');

module.exports = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.borderColor,
    borderRadius: Dimens.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.textAntiAppColor,
    fontSize: Dimens.buttonTextSize,
  },
});