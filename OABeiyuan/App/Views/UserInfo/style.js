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
  userBasicInfoPanel: {
    height: 148,
    backgroundColor: Colors.appColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.textAntiAppColor,
    borderBottomWidth: 1,
  },
  userIcon: {
    width: Dimens.avatarSize,
    height: Dimens.avatarSize,
    marginLeft: 20,
  },
  basicInfoPanel: {
    marginLeft: 20,
  },
  userNameText: {
    fontSize: 21,
    color: Colors.textAntiAppColor,
  },
  userDeptText: {
    fontSize: 16,
    color: Colors.textAntiAppColor,
    marginTop: 20,
  },
  userDetailPanel: {
  },
  formItem: {
    height: 55,
  },
  editBtn: {
    height: Dimens.standardAppButtonHeight,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  editingBtnPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
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
