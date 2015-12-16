'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  ListView,
} = React;

// Strings
var Strings = require('../../Values/string');
// Elements
var AppButton = require('../Elements/AppButton'); // 系统主题按钮
var AppNegButton = require('../Elements/AppNegButton'); // 系统主题镂空按钮
var AppNoRadiusButton = require('../Elements/AppNoRadiusButton'); // 系统主题无圆角按钮
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
        renderRow={this.renderMovie}
      />
    );
  },

  renderMovie: function(movie) {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
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