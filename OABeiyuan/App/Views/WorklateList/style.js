'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var Colors = require('../../Values/colors');
var Dimens = require('../../Values/dimens');

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    top: Dimens.topBarMargin,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  promptLoading: {
    alignSelf: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});
