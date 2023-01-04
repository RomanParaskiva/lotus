import { put, takeEvery, all } from "redux-saga/effects";
import { getUsers, successGetUsers } from "../store/slices/usersSlice";
import { getUsersFunc } from "../utils/func";

function* watchFetchUsers() {
  yield takeEvery(getUsers.type, fetchUsers);
}

function* fetchUsers() {
  try {
    const data: string[][] = yield getUsersFunc();
    yield put(successGetUsers(data));
  } catch (e) {
    console.log(e);
  }
}

export function* usersSaga() {
  yield all([watchFetchUsers()]);
}
