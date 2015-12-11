/**
 * Usage:
 * 属性：
 *  text: 用作显示此按钮上的文字
 *  onPress: 点击事件
 * 样式：
 *  height: 高度，默认请指定35，必须指定一个值
 */

'use strict';

var React = require('react-native');

var {
  Text,
  TouchableHighlight,
  View,
} = React;

// Styles
var styles = require('./style');

var AppButton = React.createClass({

  _onPress: function() {
    if (this.props.hasOwnProperty('onPress')) {
      this.props.onPress();
    }
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.btnHighLight} onPress={() => this._onPress()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = AppButton;