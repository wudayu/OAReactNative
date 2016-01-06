/**
 * Usage:
 * 属性：
 *  同DatePickerIOS, date & mode 这两个属性是必须的
 *  visible: 当前是显示还是隐藏
 *  onConfirmed: 当在次控件中点击了"确定"按钮的时候
 *  onDismiss: 当点击了"返回"时触发的事件
 */

'use strict';

var React = require('react-native');

var {
  View,
  DatePickerIOS,
} = React;

// Strings
var Strings = require('../../../Values/string');
// Elements
var AppButton = require('../AppButton'); // 系统主题按钮
var CanCloseModal = require('../CanCloseModal'); // 透明面板
// Styles
var styles = require('./style');

var DatePickerIOSWithModal = React.createClass({
  _onConfirmed: function() {
    if (this.props.hasOwnProperty('onConfirmed')) {
      this.props.onConfirmed(this.state.date);
    }
  },
  _onDismiss: function() {
    if (this.props.hasOwnProperty('onDismiss')) {
      this.props.onDismiss();
    }
  },
  getInitialState: function() {
    return {
      date: this.props.date,
    }
  },
  render: function() {
    var {date, ...otherProps} = this.props;
    return (
      <CanCloseModal
        onDismiss={() => this._onDismiss()}
        animated={true}
        visible={this.props.visible}>
        <View style={styles.iosDatePickerPanel}>
          <DatePickerIOS
            date={this.state.date}
            {...otherProps}
            onDateChange={(date) => this.setState({date: date})}
          />
          <AppButton
            style={styles.iosDatePickerButton}
            text={Strings.confirm}
            onPress={() => this._onConfirmed()}
          />
        </View>
      </CanCloseModal>
    );
  }
});

module.exports = DatePickerIOSWithModal;