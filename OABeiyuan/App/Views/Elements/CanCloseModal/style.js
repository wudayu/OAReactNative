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
    alignItems: 'center',
    justifyContent: 'center',
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
  closeButton: {
    color: Colors.textAntiAppColor,
    fontSize: 20,
    position: 'absolute',
    top: 25,
    right: 20,
  },
});