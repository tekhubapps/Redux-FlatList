'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Loading from './common/Loading';
import TaskRow from './listrows/TaskRow';

export default class TaskList extends Component {

  static propTypes = {
    showLoading: PropTypes.bool,
    taskArray: PropTypes.array, 
  };

  _renderRow({item}) {
    return(
      <TaskRow
        rowData={item}/>
    );
  }

  _keyExtractor(data) {
    return data.id;
  }

  _renderScreen() {
    if (this.props.showLoading) {
      return (
        <Loading/>
      );
    } else {
      return (
        <View>
          <Text style={{color: 'black', marginHorizontal: 20}}>
            You have {this.props.taskArray.length} request to catch up on today
          </Text>
          <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.taskArray}
            renderItem={this._renderRow}
            keyExtractor={this._keyExtractor} />
        </View>
        
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderScreen()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});
