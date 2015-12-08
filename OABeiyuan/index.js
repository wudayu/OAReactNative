'use strict';

var React = require('react-native');

var {
  // 使用Navigator在应用的不同界面中穿越
  Navigator,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  ToolbarAndroid,
  BackAndroid,
} = React;

// Views
var LoginView = require('./App/Views/Login');
var UserInfoView = require('./App/Views/UserInfo');
// Styles
var styles = require('./style');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;






var _navigator;

var NavToolbar = React.createClass({

  componentWillMount: function() {
    var navigator = this.props.navigator;
  },

  render: function () {
    if (this.props.navIcon) {
      return (
        <ToolbarAndroid
          style={styles.toolbar}
          navIcon={{uri: 'ic_arrow_back_white_24dp', isStatic: true}}
          onIconClicked={this.props.navigator.pop}
          actions={this.props.actions}
          onActionSelected={this.props.onActionSelected}
          title={this.props.route.title}
          titleColor='white' />
      )
    }
    return (
      <ToolbarAndroid
        style={styles.toolbar}
        onIconClicked={this.props.navigator.pop}
        actions={this.props.actions}
        onActionSelected={this.props.onActionSelected}
        titleColor='white'
        title='贝源OA' />
    )
  }
})

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});var _navigator;








/**
 * 主界面组件
 * 使用项目名称作为组件名称，突出重要性
 */
var OABeiyuan = React.createClass({
  getInitialState: function() {
    return {};
  },



  renderSceneAndroid: function(route, navigator) {
    _navigator = navigator;

    if (route.id === 'Login') {
      return (
        <View style={styles.container}>
          <NavToolbar navigator={navigator} route={route} />
          <LoginView navigator={navigator} route={route} />
        </View>
      )
    }
    if (route.id === 'UserInfo') {
      return (
        <View style={styles.container}>
          <NavToolbar navIcon={true} navigator={navigator} route={route} />
          <UserInfoView navigator={navigator} route={route} />
        </View>
      )
    }
  },

  renderSceneIOS: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    switch (route.id) {
      case 'empty':
      //Com <View />;
      case 'Login':
        Component = LoginView;
        navBar = null;
        break;
      case 'UserInfo':
        Component = UserInfoView;
        navBar = null;
        break;
    }

    if (navBar === null) {
      navBar = <View style={styles.statusBar} />;
    }

    return (
      <View style={styles.container}>
        {navBar}
        <Component
          navigator={navigator}
          route={route} />
      </View>
    );
  },






  /*
   * 设置Android切换界面动画为“渐变”模式
   */
  configureSceneAndroid: function(route) {
    return Navigator.SceneConfigs.FadeAndroid;
  },

  /*
   * 设置iOS切换界面动画为“从下向上”或“侧面滑动”模式
   */
  configureSceneIOS: function(route) {
    switch (route.id) {
      case 'Login':
        return Navigator.SceneConfigs.FloatFromBottom;
      case 'UserInfo':
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      default:
        return Navigator.SceneConfigs.FloatFromBottom;
    }
  },
  /*
   * render方法决定绘制界面的方式
   * 1.使用Navigator
   * 2.区分不同平台
   */
  render: function() {
    /*
     Navigator的renderScene属性接受function(route, navigator)形式的返回一个UI元素的函数
     (route, navigator) => <View balabala />
     */
    var renderScene = Platform.OS === 'ios' ? this.renderSceneIOS: this.renderSceneAndroid;
    /*
     Navigator在切换界面时的动画效果属性接受function(route)形式的反回类似于
     Navigator.SceneConfigs.FloatFromRight的元素的函数。
     (route) => Navigator.SceneConfigs.FloatFromRight
     */
    var configureScene = Platform.OS === 'ios' ? this.configureSceneIOS: this.configureSceneAndroid;

    return (
      <Navigator
        debugOverlay={false}
        // 初始化一个初始界面，用id来identify
        initialRoute={{title: 'Login', id: 'Login'}}
        // 新页面加载动画方式
        configureScene={configureScene}
        // 新页面绘制方式
        renderScene={renderScene}
      />
    );
  },
});

module.exports = OABeiyuan;
