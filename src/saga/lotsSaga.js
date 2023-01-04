import { put, takeEvery, all } from "redux-saga/effects";
import { getLots, successGetLots } from "../store/slices/lotsSlice";
import { getLotsFunc } from "../utils/func";

function* watchFetchLots() {
  yield takeEvery(getLots.type, fetchLots);
}

function* fetchLots() {
  try {
    const data = yield getLotsFunc();
    yield put(successGetLots(data));
  } catch (e) {
    console.log(e);
  }
}

export function* lotsSaga() {
  yield all([watchFetchLots()]);
}
