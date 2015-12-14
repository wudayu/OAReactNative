'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../../../Styles/colors');

module.exports = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#D2D2D2',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#444444',
    fontSize: 14,
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
    color: '#FF00FF',
    position: 'absolute',
    left: 80,
    right: 10,
    top: 10,
    bottom: 10,
  }
});