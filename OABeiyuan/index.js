'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');

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

/**
 * 设置iOS的StatusBar风格
 */
Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;

/**
 * 使用ToolbarAndroid定义ToolBar
 * 来作为本应用的Android导航栏
 */
var ToolBar = React.createClass({
  render: function () {
    if (this.props.navIcon) {
      return (
        <ToolbarAndroid
          style={styles.toolBar}
          navIcon={{uri: 'ic_arrow_back_white', isStatic: true}}
          onIconClicked={this.props.navigator.pop}
          actions={this.props.actions}
          onActionSelected={this.props.onActionSelected}
          title={this.props.route.title}
          titleColor='white' />
      )
    }
    return (
      <ToolbarAndroid
        style={styles.toolBar}
        onIconClicked={this.props.navigator.pop}
        actions={this.props.actions}
        onActionSelected={this.props.onActionSelected}
        titleColor='white'
        title='贝源OA' />
    )
  }
});

/**
 * 定义ToolbarAndroid的后退按键
 */
var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});


/**
 * 主界面组件
 * 使用项目名称作为组件名称，突出重要性
 */
var OABeiyuan = React.createClass({
  getInitialState: function() {
    return {};
  },

  /*
   * 渲染Android的界面，主要控制渲染ToolBar+指定界面（View）
   */
  renderSceneAndroid: function(route, navigator) {
    // 先将当前的navigator赋值给BackAndroid的_navigator方便操作
    _navigator = navigator;

    if (route.id === 'Login') {
      return (
        <View style={styles.container}>
          <ToolBar navigator={navigator} route={route} />
          <LoginView navigator={navigator} route={route} />
        </View>
      )
    }
    if (route.id === 'UserInfo') {
      return (
        <View style={styles.container}>
          <ToolBar navIcon={true} navigator={navigator} route={route} />
          <UserInfoView navigator={navigator} route={route} />
        </View>
      )
    }
  },

  /*
   * 渲染iOS的界面，主要控制渲染NavigationBar+指定界面（View）
   */
  renderSceneIOS: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    switch (route.id) {
      case 'empty':
      case 'Login':
        Component = LoginView;
        navBar = <NavigationBar
          style={styles.navBar}
          title={{
            title: '欢迎使用贝源OA',
            tintColor: 'white',
          }}
        />;
        break;
      case 'UserInfo':
        Component = UserInfoView;
        navBar = <NavigationBar
          style={styles.navBar}
          leftButton={{
            title: '返回',
            handler: () => navigator.pop(),
            tintColor: 'white',
          }}
          title={{
            title: '个人信息',
            tintColor: 'white'
          }}
        />;
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
        initialRoute={{title: '登录', id: 'Login'}}
        // 新页面加载动画方式
        configureScene={configureScene}
        // 新页面绘制方式
        renderScene={renderScene}
      />
    );
  },
});

module.exports = OABeiyuan;
