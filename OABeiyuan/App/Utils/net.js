'use strict'

let PREFIX = 'http://';
let DOMAIN = '192.168.21.13:8087/';
let ADDRESS = PREFIX + DOMAIN;

let RESULT_CODE_TOKEN_EXPIRED = '0x103';
let RESULT_CODE_NEED_UPDATE = '0x104';
let RESULT_CODE_CANT_HANDLE = '0x105';
let RESULT_CODE_USERPW_WRONG = '0x106';

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
  // 打印消息
  if (responseJson.messageType !== 0) {
    utilHandler.show(responseJson.message);
  }
  // 接口处理机制
  if (responseJson.resultCode === RESULT_CODE_TOKEN_EXPIRED) {
    // Token 过期
    navigator.popToTop();
    return null;
  } else if (responseJson.resultCode === RESULT_CODE_NEED_UPDATE) {
    // 版本需要更新(强制更新)
    return null;
  } else if (responseJson.resultCode === RESULT_CODE_CANT_HANDLE) {
    // 服务端无法处理
    return null;
  } else if (responseJson.resultCode === RESULT_CODE_USERPW_WRONG) {
    // 用户名密码错误
    navigator.popToTop();
    return null;
  }

  return responseJson.data;
};

/**
 * 内部调用方法,用于在POST方式中,转换对象为服务端可接收方式
 *
 * @param obj
 * @returns {string}
 */
function toQueryString(obj) {
  return obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key];
    if (Array.isArray(val)) {
      return val.sort().map(function (val2) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
      }).join('&');
    }

    return encodeURIComponent(key) + '=' + encodeURIComponent(val);
  }).join('&') : '';
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
};

/**
 * 获取用户信息
 *
 * @param userId 当前用户Id
 * @param token 当前用户token
 * @param employeeId 需要查询的用户Id
 * @returns Response
 */
exports.getUserById = function(userId: string, token: string, employeeId: string) {
  var REQUEST_URL = ADDRESS + 'appuser/getUserById';

  return fetch(REQUEST_URL, {
    method: 'POST',
    headers: {
      // 服务器返回数据格式
      'Accept': 'application/json',
      // 传向服务器的数据格式
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: toQueryString({
      'id': userId,
      'token': token,
      'employeeId': employeeId,
    })
  });
};

