'use strict';

import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default class Loading extends PureComponent {

  render() {
    return (
      <View style={styles.container}>

        <ActivityIndicator
            animating={true}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
