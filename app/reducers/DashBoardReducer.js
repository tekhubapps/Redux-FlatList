'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = { 
  showUserLoading: true, //Shows spinner when the user webservice is loading.
  showTaskLoading: true, //Shows spinner when the task webservice is loading.
  showPostLoading: true, //Shows spinner when the post webservice is loading.
};

const {
  RESET_ALL_LOADING, 
  USER_DATA_LOADED,
  RESET_REFRESH_LOADING,
  TASK_DATA_LOADED,
  POST_DATA_LOADED,
} = ACTIONS;

export const dashBoardState = (state = initialState, action) => {
  const { 
    type,
  } = action;
  switch (type) {
    case RESET_ALL_LOADING:
      return { ...state, showUserLoading: true, showTaskLoading: true, showPostLoading: true };
      case RESET_REFRESH_LOADING:
        return { ...state, showTaskLoading: true, showPostLoading: true };
    case USER_DATA_LOADED:
      return { ...state, showUserLoading: false};
    case TASK_DATA_LOADED:
      return { ...state, showTaskLoading: false};
    case POST_DATA_LOADED:
      return { ...state, showPostLoading: false};
    default:
      return state;
  }
};