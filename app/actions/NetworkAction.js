'use strict';

import {
  NetInfo,
} from 'react-native';

import {ACTIONS} from '../util/Constants';

import { invokeUserDataWebservice } from './DashBoardAction';

/**
 * Checks the internet connection and sets the status in the state of the store
 */
export const checkNetworkConnection = () => {

  return ((dispatch) => {
    NetInfo.addEventListener('connectionChange', (networkType) => {
      NetInfo.isConnected.fetch().then((isNetworkConnectivityAvailable) => {
        const { NETWORK_STATUS_CHANGED } = ACTIONS;

        dispatch({
          type: NETWORK_STATUS_CHANGED,
          isNetworkConnectivityAvailable,
        });
        
        if (isNetworkConnectivityAvailable) {
          dispatch(invokeUserDataWebservice());
        }
      });
    });
  });

};
