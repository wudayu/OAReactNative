'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../../Values/colors');
var Dimens = require('../../../../Values/dimens');

module.exports = StyleSheet.create({
  item: {
    backgroundColor: Colors.textAntiAppColor,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.promptTextColor,
    fontSize: Dimens.promptTextSize,
    marginLeft: 10,
  },
  input: {
    position: 'absolute',
    left: 80,
    right: 10,
    top: 10,
    bottom: 10,
  },
  inputEditing: {
    color: Colors.appColor,
    position: 'absolute',
    left: 80,
    right: 10,
    top: 10,
    bottom: 10,
  }
});