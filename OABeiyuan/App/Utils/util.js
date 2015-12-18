'use strict'
var React = require('react-native');

var {
  AlertIOS,
  Platform,
  ToastAndroid,
} = React;

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