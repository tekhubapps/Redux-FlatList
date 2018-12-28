'use strict';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashBoard from '../components/DashBoard';
import { checkNetworkConnection } from '../actions/NetworkAction';
import { invokeTaskDataWebservice } from '../actions/DashBoardAction';

const mapStateToProps = (state, ownProps) => {

  const {
    dashBoardState: {
      showUserLoading,
      showTaskLoading,
      showPostLoading,
    },
    user: {
      userInfo,
    },
    task: {
      taskArray,
    },
    post: {
      postArray,
    }
  } = state;

  return {
    showUserLoading,
    showTaskLoading,
    showPostLoading,
    userInfo,
    taskArray,
    postArray,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkNetworkConnection,
    invokeTaskDataWebservice,
  }, dispatch);
}

const DashBoardConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);

export default DashBoardConatiner;