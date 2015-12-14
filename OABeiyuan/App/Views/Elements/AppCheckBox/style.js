'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Styles/colors');

module.exports = StyleSheet.create({
  btnHighLight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cbImg: {
    width: 17,
    height: 17,
  },
  cbText: {
    color: Colors.appColor,
    fontSize: 16,
    marginLeft: 8,
  },
});