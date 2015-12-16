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
} = React;

// Strings
var Strings = require('../../../../Values/string');
// Styles
var styles = require('./style');

var ListItem = React.createClass({
  render: function() {
    return (
      <View style={this.props.style}>
        <View style={styles.item}>
          <View style={styles.firstBlock}>
            <Text>
              {Strings.textWorklateType} : {this.props.type}
            </Text>
            <Text>
              {Strings.textWorklateApplier} : {this.props.applier}
            </Text>
            <Text>
              {Strings.textWorklateReason} : {this.props.reason}
            </Text>
          </View>
        </View>
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
 private String voertimeReason;
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
