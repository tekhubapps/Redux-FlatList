'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import RouteNavigator from './app/index';

/**
 * Gets the store and registered scenes and sets that to provider
 */
class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <RouteNavigator />
        </Provider>
      );
    }
  }

  export default App;