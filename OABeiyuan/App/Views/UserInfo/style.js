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
    borderColor: '#D2D2D2',
    borderBottomWidth: 1,
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
  userDetailPanel: {
  },
  formItem: {
    height: 55,
  },
  editBtn: {
    height: 35,
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
    height: 35,
    width: 100,
  },
  funcPanel: {
    borderBottomWidth: 1,
    borderColor: '#D2D2D2',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  funcLeftBtn: {
    flex: 1,
    height: 40,
    borderRightWidth: 1,
    borderColor: '#D2D2D2',
  },
  funcRightBtn: {
    flex: 1,
    height: 40,
  },
});
