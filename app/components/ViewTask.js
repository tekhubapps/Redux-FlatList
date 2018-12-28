'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const _ = require('lodash');

export default class ViewTask extends Component {

  static propTypes = {
    viewData: PropTypes.object,
  };

  _renderTagItem(tagArray) {
    let tagView = [];
    for (let i = 0; i < tagArray.length; i++) {
      tagView.push(
        <View key={i} style={{padding: 5, borderRadius: 5, backgroundColor: (i%2 === 0)?'#2414F7': '#FD0386', marginRight: 7}}>
            <Text style={{fontSize: 14, color: 'white'}}>
            {tagArray[i]}
            </Text>
        </View>
      );
    }
    return tagView;
  }

  _renderTag() {
    if (_.has(this.props.viewData, 'tags')) {
      return(
        <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
          {this._renderTagItem(this.props.viewData.tags)}
        </View>
      );
    } else {
      return null;
    }
  }

  _renderPostImage() {
    if (_.has(this.props.viewData, 'image')) {
      return(
        <Image
          resizeMode="stretch"
          style={{height: 240}}
          source={{uri: this.props.viewData.image}}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const desc = (_.has(this.props.viewData, 'description'))? this.props.viewData.description: this.props.viewData.content;
    return (
      <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}>
        <View>

          {this._renderPostImage()}

          <View style={{padding: 20}}>

            <Text style={{ marginTop: 20, marginBottom: 10, fontSize: 27,color: '#713FFF', fontWeight: 'bold'}}>
              {this.props.viewData.name}
            </Text>

            {this._renderTag()}

            <Text style={{ marginTop: 10, marginBottom: 20, fontSize: 14, color: 'black'}}>
              {desc}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
