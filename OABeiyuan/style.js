'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Platform,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
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
  loginBtnPanel: {
    marginTop: 70,
    marginLeft: 15,
    marginRight: 15,
  },
  loginBtnHighLight: {
    borderRadius: 5,
  },
  loginBtn: {
    height: 35,
    backgroundColor: '7FB14D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  
});
