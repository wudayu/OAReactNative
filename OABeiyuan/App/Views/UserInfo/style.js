'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  welcomePanel: {
    backgroundColor: '#7FB14D',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  welcomeIcon: {
    width: 108,
    height: 108,
    marginTop: 20,
    marginBottom: 20,
  },
});
