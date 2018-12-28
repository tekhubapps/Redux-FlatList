'use strict';

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import PropTypes from 'prop-types';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';

export default class TaskRow extends PureComponent {

  static propTypes = {
    rowData: PropTypes.object,
  };

  _renderTag(tagArray) {
    let tagView = [];
    for (let i = 0; i < tagArray.length; i++) {
      tagView.push(
        <View key={i} style={{padding: 3, borderRadius: 5, backgroundColor: (i%2 === 0)?'#2414F7': '#FD0386', marginRight: 5}}>
            <Text style={{fontSize: 10, color: 'white'}}>
            {tagArray[i]}
            </Text>
        </View>
      );
    }
    return tagView;
  }

  render() {
    return (
        <CardView
        style={{width: 140, height: 140, margin: 10}}
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}>

          <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {Actions.viewTask({viewData: this.props.rowData});}}
            >

            <View style={{height: 140, padding: 10, backgroundColor: 'white'}}>

              <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {this.props.rowData.name}
              </Text>

              <Text style={{fontSize: 10, color: 'gray', marginTop: 10}}>
                  {this.props.rowData.subtitle}
              </Text>

              <View style={{flex: 1}}>
                  <View style={{flex: 1}}></View>
                  <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
                      {this._renderTag(this.props.rowData.tags)}
                  </View>
              </View>

            </View>
          </TouchableHighlight>
      </CardView>
    );
  }

}
