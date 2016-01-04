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
  formItem: {
    height: 55,
  },
  textArea: {
    height: 120,
  },
  editBtn: {
    height: Dimens.standardAppButtonHeight,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  editingBtnPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 15,
  },
  editingBtn: {
    height: Dimens.standardAppNegButtonHeight,
    width: 100,
  },
  funcPanel: {
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  funcLeftBtn: {
    flex: 1,
    height: Dimens.standardAppNegButtonHeight,
    borderRightWidth: 1,
    borderColor: Colors.textAntiAppColor,
  },
  funcRightBtn: {
    flex: 1,
    height: Dimens.standardAppNegButtonHeight,
  },
});
