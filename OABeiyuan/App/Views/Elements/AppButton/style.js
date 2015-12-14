'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Styles/colors');
var Dimens = require('../../../Styles/dimens');

module.exports = StyleSheet.create({
  btnHighLight: {
    borderRadius: 5,// Dimens.buttonRadius,
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
    borderRadius: 5,//Dimens.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'FFFFFF', //Colors.white,
    fontSize: 18,
  },
});