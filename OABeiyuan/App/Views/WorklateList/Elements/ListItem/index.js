/**
 * Usage:
 * 属性：
 */

'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight,
} = React;

// Strings
var Strings = require('../../../../Values/string');
// Styles
var styles = require('./style');

var ListItem = React.createClass({
  _onPress: function() {
    this.props.navigator.push({worklateId: this.props.worklateId, title: Strings.titleWorklateDetailAdd, id: 'WorklateDetail'});
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.itemHighLight} onPress={() => this._onPress()}>
          <View style={styles.item}>
            <View style={styles.rowBlock}>
              <Text style={styles.sigContent}>
                {Strings.textWorklateType} : {this.props.type}
              </Text>
              <Text style={styles.sigContent}>
                {Strings.textWorklateApplier} : {this.props.applier}
              </Text>
              <Text style={styles.sigContent}>
                {Strings.textWorklateReason} : {this.props.reason}
              </Text>
            </View>
            <View style={styles.rowBlock}>
              <Text style={styles.sigContent}>
                {Strings.textWorklateBeginTm} : {this.props.beginTime}
              </Text>
              <Text style={styles.sigContent}>
                {Strings.textWorklateHours} : {this.props.lastHours}
              </Text>
              <Text style={styles.sigContent}>
                {Strings.textWorklateAuditStatus} : {this.props.auditStatus}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = ListItem;
/*
 //ID
 private Integer id;
 //开始时间
 private Date beginTm;
 //结束时间
 private Date endTm;
 //加班时长
 private Integer overtimeHours;
 //加班类型
 private Integer overtimeType;
 //加班事由
 private String overtimeReason;
 //申请人
 private Integer applierId;
 //申请时间
 private Date applyTm;
 //最后处理时间
 private Date lastTm;
 //审核状态
 private Boolean auditStatus;
 //审核人
 private Integer auditor;
 */
