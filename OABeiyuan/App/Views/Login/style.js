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
  colSeparator: {
    borderTopColor: '#D2D2D2',
    borderTopWidth: 1,
    marginLeft: 50,
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
  inputPanel: {
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
  remPwdPanel: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 15,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginBtnPanel: {
    marginLeft: 15,
    marginRight: 15,
  },
  userOptionPanel: {
    flexDirection: 'row',
    borderWidth: 0,
    position: 'absolute',
    bottom: 25,
    left:0,
    right:0,
    flex: 1,
    justifyContent: 'space-around',
  },
  appNegButton: {
    width: 130,
  },
});
