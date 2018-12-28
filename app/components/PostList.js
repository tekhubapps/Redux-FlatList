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
import PostRow from './listrows/PostRow';

export default class PostList extends Component {

  static propTypes = {
    showLoading: PropTypes.bool,
    postArray: PropTypes.array,
  };

  _renderRow({item}) {
    return(
      <PostRow
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
            Here are some blog post you may like to read
          </Text>
          <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.postArray}
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
