'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../Values/colors');
var Dimens = require('../../Values/dimens');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
    position: 'absolute',
    top: Dimens.topBarMargin,
    left: 0,
    right: 0,
    bottom: 0,
  },
  colSeparator: {
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
    marginLeft: 50,
  },
  welcomePanel: {
    backgroundColor: Colors.appColor,
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeIcon: {
    width: Dimens.avatarSize,
    height: Dimens.avatarSize,
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    color: Colors.textAntiAppColor,
    marginBottom: 20,
  },
  inputPanel: {
    backgroundColor: Colors.textAntiAppColor,
    height: 88,
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
    borderBottomColor: Colors.borderColor,
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
  loginBtn: {
    height: 35,
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
    height: Dimens.standardAppNegButtonHeight,
    width: 130,
  },
});
