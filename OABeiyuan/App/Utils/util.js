'use strict'
var React = require('react-native');

var {
  AlertIOS,
  Platform,
  ToastAndroid,
  Dimensions,
} = React;

/**
 * 打印消息
 *
 * @param msg 消息字符串
 */
exports.show = function(msg: string) {
  if (Platform.OS === 'ios') {
    AlertIOS.alert(
      null,
      msg,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
      ]
    )
  } else {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
}

/**
 * 返回适合用来显示的日期格式
 *
 * @param dateObject 日期对象
 * @returns Date String
 */
exports.getDateStringFromObject = function(dateObject: Date) {
  var dateStr = dateObject.getFullYear().toString() + '年' +
    (dateObject.getMonth() + 1) + '月' +
    dateObject.getDate() + '日 ' +
    dateObject.getHours() + '时' +
    dateObject.getMinutes() + '分';

  return dateStr;
}

/**
 * 获取设备高度
 *
 * @returns 设备高度
 */
exports.getDeviceHeight = function() {
  return Dimensions.get('window').height;
}

/**
 * 获取设备宽度
 *
 * @returns 设备宽度
 */
exports.getDeviceWidth = function() {
  return Dimensions.get('window').width;
}