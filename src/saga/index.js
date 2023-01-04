import { all } from "redux-saga/effects"
import { lotsSaga } from "./lotsSaga";
import { usersSaga } from "./usersSaga";

export function* rootSaga() {
  yield all([lotsSaga(), usersSaga()]);
}
