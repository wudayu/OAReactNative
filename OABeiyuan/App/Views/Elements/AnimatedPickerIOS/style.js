'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');
var Dimens = require('../../../Values/dimens');

module.exports = StyleSheet.create({
  showtime: {
    padding:20,
    textAlign: 'center'
  },
  chooseButtonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth:1
  },
  chooseButton: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    textAlign: 'center'
  },
  chooseButtonText: {
    color: '027afe'
  },
});