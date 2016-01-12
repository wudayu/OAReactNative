/**
 * Usage:
 * 属性：
 *  mapKey: 标示属性（对应于返回的json的键），和标示文字一一对应
 *  title: 标示文字
 *  mapValue: 返回的json的值
 *  editable: 是否可以编辑
 *  clickToChoose: 是否是用点击来进行编辑(编辑由控件外部来控制)
 *  onPress: 点击事件
 */

'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

// Styles
var styles = require('./style');
var utilHandler = require('../../../../Utils/util');

var AppButton = React.createClass({
  _onPress: function() {
    if (this.props.clickToChoose !== true)
      return;

    if (this.props.hasOwnProperty('onPress')) {
      this.props.onPress();
    }

  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.highLight} onPress={() => this._onPress()}>
          <View style={styles.item}>
            <Text style={styles.title}>
              {this.props.title} :
            </Text>
            <TextInput
              style={[styles.inputBase, this.props.editable || this.props.clickToChoose ? styles.inputEditing : styles.inputOrigin]}
              placeholder={this.props.placeholder}
              underlineColorAndroid='transparent'
              value={this.props.mapValue}
              editable={this.props.editable}
              multiline={this.props.multiline}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = AppButton;