import {all, call} from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    call(postSaga),
    call(userSaga),
  ]);
}