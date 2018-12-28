'use strict';

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import PropTypes from 'prop-types';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';

export default class PostRow extends PureComponent {

  static propTypes = {
    rowData: PropTypes.object,
  };

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

            <View style={{height: 140, backgroundColor: 'white'}}>

              <Image
                resizeMode="stretch"
                style={{height: 100, width: 140}}
                source={{uri: this.props.rowData.image}}
              />

              <View style={{paddingHorizontal: 10}}>

                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginTop: 5}}
                numberOfLines={1}>
                    {this.props.rowData.name}
                </Text>

                <Text style={{fontSize: 10, color: 'gray', marginTop: 2}}
                numberOfLines={1}>
                    {this.props.rowData.subtitle}
                </Text>

              </View>

            </View>
        </TouchableHighlight>
      </CardView>
    );
  }

}
