'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');
var Dimens = require('../../../Values/dimens');

module.exports = StyleSheet.create({
  iosDatePickerPanel: {
    flexDirection: 'column',
    backgroundColor: Colors.appBackgroundColor,
  },
  iosDatePickerButton: {
    height: Dimens.standardAppButtonHeight,
    width: 200,
    marginBottom: 15,
    alignSelf: 'center',
  },
});