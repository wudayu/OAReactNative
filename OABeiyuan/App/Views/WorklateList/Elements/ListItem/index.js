/**
 * Usage:
 * 属性：
 */

'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');

var {
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight,
} = React;

// Strings
var Strings = require('../../../../Values/string');
var utilHandler = require('../../../../Utils/util');
// Styles
var styles = require('./style');

// 加班类型数组
var itemTypes = null;

var ListItem = React.createClass({
  getDefaultProps: function() {
    store.get('finalValue').then((finalValue) => {
      itemTypes = finalValue.worklateTypes;
    });
  },
  _onPress: function() {
    this.props.navigator.push({title: Strings.titleWorklateDetail, id: 'WorklateDetail',
      worklateId: this.props.worklateId,
      itemType: this.props.type,
      applierId: this.props.applierId,
      applierName: this.props.applier,
      reason: this.props.reason,
      beginTm: this.props.beginTime,
      endTm: this.props.endTime,
      lastHours: this.props.lastHours,
      auditId: this.props.auditId,
      auditStatus: this.props.auditStatus,
    });
  },
  render: function() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.itemHighLight} onPress={() => this._onPress()}>
          <View style={styles.item}>
            <View style={styles.rowBlock}>
              <Text style={styles.sigContent}>
                {Strings.textWorklateType} : {itemTypes[this.props.type].label}
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
                {Strings.textWorklateBeginTm} : {utilHandler.getDateStringFromObject(this.props.beginTime)}
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
