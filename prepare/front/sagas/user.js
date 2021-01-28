import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function* logIn(action) {
    try {
        // const result = yield call(logInAPI);
        yield delay(2000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        });
    } catch (e) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: e.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(2000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data,
        });
    } catch (e) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: e.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}