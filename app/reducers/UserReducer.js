'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = { 
  userInfo: undefined, //Conatins user data like id, first_name, last_name, email and avator
};

const {
  UPDATE_USER_DATA,
} = ACTIONS;

export const user = (state = initialState, action) => {
  const { 
    type,
    userInfo,
  } = action;
  switch (type) {
    case UPDATE_USER_DATA:
      return { ...state, userInfo };
    default:
      return state;
  }
};