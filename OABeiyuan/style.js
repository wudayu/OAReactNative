'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  statusBar: {
    height: 20,
    backgroundColor: '#7FB14D',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#141414',
  },
  toolbar: {
    backgroundColor: '#3CABDA',
    height: 56,
  },
});
