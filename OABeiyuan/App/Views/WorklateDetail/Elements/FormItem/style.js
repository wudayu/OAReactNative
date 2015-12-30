'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../../Values/colors');
var Dimens = require('../../../../Values/dimens');

module.exports = StyleSheet.create({
  highLight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
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
  inputBase: {
    fontSize: 17,
    position: 'absolute',
    left: 80,
    right: 10,
    top: 10,
    bottom: 10,
  },
  inputOrigin: {
    color: Colors.defaultFontColor,
  },
  inputEditing: {
    color: Colors.appColor,
  }
});