import {
  watchLogin,
  watchSignOut,
} from "../features/authentication/authentication-saga";

import { all } from "redux-saga/effects";
import {
  watchUpdateUserProfile,
  watchUploadCertificate,
} from "../features/profile/profile-saga";
function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignOut(),
    watchUpdateUserProfile(),
    watchUploadCertificate(),
  ]);
}

export { rootSaga };
