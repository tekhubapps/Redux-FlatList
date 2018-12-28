
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

/**
 * Creates a store with given reducers
 */
export default createStore(reducers, applyMiddleware(thunk));