'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = { 
  taskArray: [], //Conatins list of task data
};

const {
  UPDATE_TASK_DATA,
} = ACTIONS;

export const task = (state = initialState, action) => {
  const { 
    type,
    taskArray,
  } = action;
  switch (type) {
    case UPDATE_TASK_DATA:
      return { ...state, taskArray };
    default:
      return state;
  }
};