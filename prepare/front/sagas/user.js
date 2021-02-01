import {all, delay, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  FOLLOW_FAILURE,
  FOLLOW_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
} from '../reducers/user';

function followAPI(data) {
  return axios.post('/api/follow', data);
}

function* follow(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(2000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: FOLLOW_FAILURE,
      data: e.response.data,
    });
  }
}

function unfollowAPI(data) {
  return axios.post('/api/unfollow', data);
}

function* unfollow(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(2000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: UNFOLLOW_FAILURE,
      data: e.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      data: e.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(2000);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: e.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: e.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(LOG_IN_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(LOG_OUT_REQUEST, unfollow);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}