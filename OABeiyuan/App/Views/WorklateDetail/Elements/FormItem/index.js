/**
 * Usage:
 * 属性：
 *  key: 标示属性（对应于返回的json的键），和标示文字一一对应
 *  title: 标示文字
 *  value: 返回的json的值
 *  editable: 是否可以编辑
 */

'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TextInput,
} = React;

// Styles
var styles = require('./style');

var AppButton = React.createClass({
  render: function() {
    return (
      <View style={this.props.style}>
        <View style={styles.item}>
          <Text style={styles.title}>
            {this.props.title} :
          </Text>
          <TextInput
            style={this.props.editable ? styles.inputEditing : styles.input}
            placeholder={this.props.placeholder}
            underlineColorAndroid='transparent'
            value={this.props.value}
            editable={this.props.editable}
          />
        </View>
      </View>
    );
  }
});

module.exports = AppButton;