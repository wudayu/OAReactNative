/**
 * Usage:
 * 属性：
 *  text: 用作显示此按钮上的文字
 *  onPress: 点击事件
 */

'use strict';

var React = require('react-native');

var {
  Text,
  TouchableOpacity,
  View,
} = React;

// Styles
var styles = require('./style');

var AppNegButton = React.createClass({

  _onPress: function() {
    this.props.onPress();
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity activeOpacity="0.5" style={styles.btnHighLight} onPress={() => this._onPress()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = AppNegButton;