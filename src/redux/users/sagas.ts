/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersFailure, fetchUsersSuccess } from './actions';
import { fetchUsers } from '../../api/users';

function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response = yield call(fetchUsers);
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga)]);
}
