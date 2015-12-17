'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;

// Strings
var Strings = require('../../Values/string');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
var ListItem = require('./Elements/ListItem'); // 本页面列表项
// Styles
var styles = require('./style');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var WorklateView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  render: function() {
    var content = null;

    if (!this.state.loaded) {
      content = this.renderLoadingView();
    } else {
      content = this.renderLoadedListView();
    }
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  },
  renderLoadingView: function() {
    return (
      <Text style={styles.promptLoading}>
        {Strings.promptLoadingWorklate}
      </Text>
    );
  },
  renderLoadedListView: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderWorklate}
      />
    );
  },
  renderWorklate: function(worklate) {
    return (
      <ListItem
        style={styles.listItem}
        type="事假"
        applier="吴大宇"
        reason="家里有事需要回家"
        beginTime="2015-08-11"
        lastHours="3"
        auditStatus="审核通过"
      />
    );
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  },
});

module.exports = WorklateView;
