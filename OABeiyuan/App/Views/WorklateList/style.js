'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../Values/colors');
var Dimens = require('../../Values/dimens');

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Dimens.topBarMargin,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  promptLoading: {
    alignSelf: 'center',
  },
  listItem: {
    height: Dimens.worklateItemHeight,
  },
});
