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
    flexDirection: 'column',
  },
  rowBlock: {
    height: Dimens.worklateItemHeight / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sigContent: {
    marginRight: 10,
  },
});