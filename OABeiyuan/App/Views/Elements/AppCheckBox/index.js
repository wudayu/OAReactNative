/**
 * Usage:
 * 属性：
 *  text: 用作显示此CheckBox后方的文字
 *  onPress: 点击事件
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

  _onPress: function(checked: Object) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.hasOwnProperty('onPress')) {
      this.props.onPress(checked);
    }
  },
  getInitialState() {
    return {
      checked: this.props.checked,
    };
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          activeOpacity="0.5"
          style={styles.btnHighLight}
          onPress={(checked) => this._onPress({checked})}>
          <Image
            style={styles.cbImg}
            source={
              this.state.checked ?
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