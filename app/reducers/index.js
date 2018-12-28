'use strict';

import { combineReducers } from 'redux';

import { deviceState } from './DeviceReducer';
import { dashBoardState } from './DashBoardReducer';
import { user } from './UserReducer';
import { task } from './TaskReducer';
import { post } from './PostReducer';

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
  deviceState,
  dashBoardState,
  user,
  task,
  post,
});

export default rootReducer;