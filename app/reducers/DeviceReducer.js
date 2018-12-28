'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = { 
  isNetworkConnectivityAvailable: undefined, //Used to check whether internet is connected or not
};

const {
  NETWORK_STATUS_CHANGED, 
} = ACTIONS;

export const deviceState = (state = initialState, action) => {
  const { 
    type,
    isNetworkConnectivityAvailable,
  } = action;
  switch (type) {
    case NETWORK_STATUS_CHANGED:
      return { ...state, isNetworkConnectivityAvailable };
    default:
      return state;
  }
};