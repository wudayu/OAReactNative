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
 * 使用Post方式进行请求
 *
 * @param url 请求的url
 * @param params 请求的参数,以对象格式
 * @returns {*}
 */
function fetchByPost(url: string, params: object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      // 服务器返回数据格式
      'Accept': 'application/json',
      // 传向服务器的数据格式
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: toQueryString(params)
  })
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

  return fetchByPost(REQUEST_URL, {
    id: userId,
    token: token,
    employeeId: employeeId,
  });
};

/**
 * 获取系统常量
 *
 * @returns {*}
 */
exports.getFinalValue = function() {
  var REQUEST_URL = ADDRESS + 'appuser/getFinalValue';

  return fetchByPost(REQUEST_URL);
}

/**
 * 获取用户列表
 *
 * @param currentPage
 * @param pageSize
 * @returns {*}
 */
exports.getUserList = function(currentPage, pageSize) {
  var REQUEST_URL = ADDRESS + 'appuser/getUserList';

  return fetchByPost(REQUEST_URL, {
    currentpage: currentPage,
    pagesize: pageSize,
  });
}

exports.getWorklateList = function(userId: string, token: string, applyId: string, date: number, currentPage, pageSize) {
  var REQUEST_URL = ADDRESS + 'appworklate/getWorklateList';

  return fetchByPost(REQUEST_URL, {
    userId: userId,
    token: token,
    applyId: applyId,
    date: date,
    currentpage: currentPage,
    pagesize: pageSize,
  });
}

/** 几种常量格式, getFinalValue
 // 下一级审批人
 "audits": [
 {
   "childList": null,
   "ext1": null,
   "ext2": null,
   "label": "席凯",
   "value": "6"
 }
 ],
 // 审批类型,暂时无需使用
 "auditTypes": [
 {
   "childList": null,
   "code": "1",
   "createTm": 1450423324000,
   "createTmStr": "2015-12-18 15:22",
   "ext1": null,
   "ext2": null,
   "id": 55,
   "label": "已提交",
   "name": "已提交",
   "remarks": "",
   "sortNum": 1,
   "status": 1,
   "statusStr": "使用中",
   "typeName": "审核状态",
   "value": "1"
 },
 ],
 // 请假类型
 "leaveTypes": [
 {
   "childList": null,
   "ext1": null,
   "ext2": null,
   "label": "调休",
   "value": "7"
 }
 ],
 // 加班类型
 "worklateTypes": [
 {
   "childList": null,
   "code": "1",
   "createTm": 1450162549000,
   "createTmStr": "2015-12-15 14:55",
   "ext1": null,
   "ext2": null,
   "id": 50,
   "label": "工作日",
   "name": "工作日",
   "remarks": "工作日加班",
   "sortNum": 1,
   "status": 1,
   "statusStr": "使用中",
   "typeName": "加班类型",
   "value": "1"
 },
 ]
 */