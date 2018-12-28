'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Loading from './common/Loading';

export default class UserDetails extends Component {

  static propTypes = {
    showLoading: PropTypes.bool,
    userInfo: PropTypes.object,
  };

  _renderScreen() {
    if (this.props.showLoading) {
      return (
        <Loading/>
      );
    } else {
        return (
            <View style={{alignContent: 'flex-end'}}>

              <View>
                <Image
                  resizeMode="contain"
                  style={styles.profileImage}
                  source={require('../images/PicThumb.png')}
                />
                <Image
                  resizeMode="contain"
                  style={[styles.profileImage, {position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}]}
                  source={{uri: this.props.userInfo.avatar}}
                />
              </View>
              

              <Text style={{color: '#713FFF', fontSize: 25, fontWeight: 'bold', marginTop: 5}}>
                Hi {this.props.userInfo.first_name},
              </Text>
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
    height: 100,
    marginVertical: 20,
    padding:20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
