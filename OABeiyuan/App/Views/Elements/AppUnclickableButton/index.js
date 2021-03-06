/**
 * Usage:
 * 属性：
 *  text: 用作显示此按钮上的文字
 *  onPress: 点击事件
 * 样式：
 *  height: 高度，必须指定一个值
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
  render: function() {
    return (
      <View style={this.props.style}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            {this.props.text}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = AppButton;