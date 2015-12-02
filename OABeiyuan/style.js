'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#7FB14D',
    paddingTop: 20,
  },
  colSeparator: {
    borderTopColor: '#D2D2D2',
    borderTopWidth: 1,
    marginLeft: 50,
  },
  welcomePanel: {
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
  input: {
    backgroundColor: '#FFFFFF',
    height: 88,
    borderTopColor: '#D2D2D2',
    borderTopWidth: 1,
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    flexDirection: 'column',
  },
  inputRow: {
    height: 44,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  inputImg: {
    alignSelf: 'center',
    width: 22,
    height: 22,
    marginLeft: 16,
    marginRight: 16,
  },
  textInput: {
    alignSelf: 'center',
    width: 250,
    height: 43,
    borderWidth: 0,
  },
});
