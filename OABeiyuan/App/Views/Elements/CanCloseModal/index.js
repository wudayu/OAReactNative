/**
 * Usage:
 * 属性：
 *  animated: 用作显示此按钮上的文字 TODO rewrite
 *  visible: 是否显示此Modal
 *  onDismiss: 关闭时的回调
 */

'use strict';

var React = require('react-native');

var {
  Platform,
  View,
  Text,
  Modal,
  TouchableOpacity,
} = React;

// Strings
var Strings = require('../../../Values/string');
// Styles
var styles = require('./style');

var CanCloseModal = React.createClass({
  _onDismiss: function() {
    if (this.props.hasOwnProperty('onDismiss')) {
      this.props.onDismiss();
    }
  },
  getInitialState: function() {
    return {visible: this.props.visible};
  },
  render: function() {
    var {visible, transparent, ...otherProps} = this.props;
    if (Platform.OS === 'ios') {
      return (
        <Modal
          {...otherProps}
          visible={this.props.visible}
          transparent={true}>
          <View style={styles.shadowBase}/>
          <View style={styles.viewBase}>
            <TouchableOpacity activeOpacity={0.5} style={styles.closeButton} onPress={() => this._onDismiss()}>
              <Text style={styles.closeHint}>{Strings.back}</Text>
            </TouchableOpacity>
            {this.props.children}
          </View>
        </Modal>
      );
    } else if (this.props.visible === true) {
      // FIXME 由于Modal目前只能在iOS中使用,所以在Android中,暂时使用一个View来代替Modal
      return (
        <View style={styles.androidModelBase}>
          <View style={styles.shadowBase}/>
          <View style={styles.viewBase}>
            <TouchableOpacity activeOpacity='0.5' style={styles.closeButton} onPress={() => this._onDismiss()}>
              <Text style={styles.closeHint}>{Strings.back}</Text>
            </TouchableOpacity>
            {this.props.children}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
});

module.exports = CanCloseModal;