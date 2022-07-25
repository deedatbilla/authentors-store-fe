import {
  watchLogin,
  watchSignOut,

} from "../features/authentication/authentication-saga";

import { all } from "redux-saga/effects";
import { watchUpdateUserProfile } from "../features/profile/profile-saga";
function* rootSaga() {
  yield all([watchLogin(), watchSignOut(), watchUpdateUserProfile()]);
}

export { rootSaga };
