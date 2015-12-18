'use strict'

let PREFIX = 'http://';
let DOMAIN = '192.168.21.13:8087/';
let ADDRESS = PREFIX + DOMAIN;

// Utils
var utilHandler = require('./util');

/**
 * 通用处理方法,每个从调用生产环境的接口都需要使用此函数处理
 *
 * @param responseJson 返回的所有Json数据
 * @param navigator 导航器
 * @returns 服务器返回数据的data部分
 */
exports.handleResponse = function(responseJson: Object, navigator: Object) {
  // 接口处理机制
  if (responseJson.code === '0x103') {
    // Token 过期
    navigator.popToTop();
    return null;
  } else if (responseJson.code === '0x104') {
    // 版本需要更新(强制更新)
    return null;
  } else if (responseJson.code === '0x105') {
    // 服务端无法处理
    return null;
  }
  if (responseJson.messageType !== '1') {
    utilHandler.show(responseJson.msg);
  }

  return responseJson.data;
}

/**
 * 登录接口,获取userId&token
 *
 * @param userName 用户名
 * @param userPwd 用户密码
 * @returns Response
 */
exports.loginWithNameAndPwd = function(userName: string, userPwd: string) {
  var REQUEST_URL = ADDRESS + 'login/loginWithNameAndPwd?account=' + userName + '&password=' + userPwd;
  return fetch(REQUEST_URL);
}