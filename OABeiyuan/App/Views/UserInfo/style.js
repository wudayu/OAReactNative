'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    bottom: 0,
  },
  userBasicInfoPanel: {
    height: 148,
    backgroundColor: '#7FB14D',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 108,
    height: 108,
    marginLeft: 20,
  },
  basicInfoPanel: {
    marginLeft: 20,
  },
  userNameText: {
    fontSize: 21,
    color: '#FFFFFF',
  },
  userDeptText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 20,
  },
});
