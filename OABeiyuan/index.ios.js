'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

/*
 * App
 * iOS与Android共用一套代码
 * 具体不同会在具体代码中区分
 */
var OABeiyuan = require('./index.js');

AppRegistry.registerComponent('OABeiyuan', () => OABeiyuan);
