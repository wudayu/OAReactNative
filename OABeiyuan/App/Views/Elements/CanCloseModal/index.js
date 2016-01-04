/**
 * Usage:
 * 属性：
 *  text: 用作显示此按钮上的文字 TODO rewrite
 * 样式：
 *  height: 高度，必须指定一个值 TODO rewrite
 */

'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Modal,
} = React;

// Strings
var Strings = require('../../../Values/string');
// Styles
var styles = require('./style');

var AppButton = React.createClass({
  render: function() {
    var {style, ...other} = this.props;
    return (
      <Modal
        {...other}
        transparent={true}
        style={[style, styles.modalBase]}>
        <View style={styles.shadowBase}>
          <Text style={styles.closeButton}>{Strings.back}</Text>
        </View>
        {this.props.children}
      </Modal>
    );
  }
});

module.exports = AppButton;