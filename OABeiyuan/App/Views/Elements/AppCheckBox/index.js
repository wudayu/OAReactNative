/**
 * Usage:
 * 属性：
 *  text: 用作显示此CheckBox后方的文字
 *  onPress: 点击事件，需要在调用时Hook（setState）此控件的checked属性
 */

'use strict';

var React = require('react-native');

var {
  Text,
  TouchableOpacity,
  View,
  Image,
} = React;

// Styles
var styles = require('./style');

var AppNegButton = React.createClass({

  _onPress: function(checked) {
    if (this.props.hasOwnProperty('onPress')) {
      this.props.onPress(!checked);
    }
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          activeOpacity="0.5"
          style={styles.btnHighLight}
          onPress={() => this._onPress(this.props.checked)}>
          <Image
            style={styles.cbImg}
            source={
              this.props.checked ?
                require('image!icon_remem_positive_login_ac') :
                require('image!icon_remem_negative_login_ac')
            }
          />
          <Text style={styles.cbText}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = AppNegButton;