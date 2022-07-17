import {
  watchLogin,
  watchSignOut,
} from "../features/authentication/authentication-saga";

import { all } from "redux-saga/effects";
function* rootSaga() {
  yield all([watchLogin(), watchSignOut()]);
}

export { rootSaga };
