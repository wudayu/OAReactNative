/**
 * Usage:
 * 属性：
 */

'use strict';

var React = require('react-native');

var {
  Animated,
  View,
  Text,
  TouchableHighlight,
  PickerIOS,
} = React;

// Strings
var Strings = require('../../../Values/string');
var utilHandler = require('../../../Utils/util');
// Styles
var styles = require('./style');

let slideDuration = 500;
let deviceHeight = utilHandler.getDeviceHeight();
var offSet = new Animated.Value(deviceHeight);

var AnimatedPicker = React.createClass({
  componentDidMount: function() {
    Animated.timing(offSet, {
      duration: slideDuration,
      toValue: 0,
    }).start()
  },
  _onConfirmed() {
    Animated.timing(offSet, {
      duration: slideDuration,
      toValue: deviceHeight,
    }).start(this.props.onConfirmed);

    if (this.props.hasOwnProperty('onConfirmed')) {
      this.props.onConfirmed();
    }
  },
  _onValueChange(itemIndex) {
    if (this.props.hasOwnProperty('onValueChange')) {
      this.props.onValueChange();
    }
  },
  render() {
    return (
      <Animated.View style={{transform: [{translateY: (offSet)}]}}>
        <View style={styles.chooseButtonContainer}>
          <TouchableHighlight onPress={this._onConfirmed} underlayColor="transparent" style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose</Text>
          </TouchableHighlight>
        </View>
        <PickerIOS
          selectedValue={this.props.currIndex}
          onValueChange={(itemIndex) => this._onValueChange(itemIndex)}>
          {this.props.children}
        </PickerIOS>
      </Animated.View>
    )
  }
});

module.exports = AnimatedPicker;