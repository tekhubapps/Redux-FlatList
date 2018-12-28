'use strict';

import store from '../store';
import axios from 'axios';

import { VALIDATION_MSG } from '../util/Constants';

export const invokeGetWebService = (url) => {

  return new Promise(function (success, failed) {

    if (!store.getState().deviceState.isNetworkConnectivityAvailable) {
      failed({ status: 503, message: VALIDATION_MSG.NO_INTERNET });
    }
      
    let headers = {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
    };

    const config = {
      method: 'GET',
      url,
      headers,
    };

    const {
      REQ_FAILED,
    } = VALIDATION_MSG;

    axios.create({
      baseURL: 'http://www.mocky.io/v2/',
      timeout: 45000,
    })(config)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          try {
            return data;
          } catch (e) {
            throw { status, message: REQ_FAILED };
          }
        }else{
          throw { status, message: REQ_FAILED };
        }
      }).then((response) => {
        success(response);
      }).catch((err) => {
        failed(err);
      }); 
  });
};
