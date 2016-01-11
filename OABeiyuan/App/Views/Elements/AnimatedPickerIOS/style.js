'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../Values/colors');

module.exports = StyleSheet.create({
  showtime: {
    padding:20,
    textAlign: 'center',
  },
  chooseButtonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  chooseButton: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    textAlign: 'center',
  },
  chooseButtonText: {
    color: Colors.appColor,
  },
});