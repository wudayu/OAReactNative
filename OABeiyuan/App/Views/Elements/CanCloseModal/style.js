'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');
var Dimens = require('../../../Values/dimens');

module.exports = StyleSheet.create({
  modalBase: {
    flex: 1,
    flexDirection: 'column',
  },
  shadowBase: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  viewBase: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  closeHint: {
    color: Colors.textAntiAppColor,
    fontSize: 20,
  },
  androidModelBase: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});