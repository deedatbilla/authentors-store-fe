import { call, put, takeEvery,select } from "redux-saga/effects";
import {  setLoading, getProfile } from "./profile-reducer";
import { AxiosHost } from "../../helpers/axios-global";
import toast from "react-hot-toast";

function* handleUpdateUserProfile({ payload }) {
  try {
    yield put(setLoading(true));
    const profile = yield select(getProfile);

    const path = `/user/${profile.profile.authId}`;
    const response = yield call([AxiosHost, "put"], path, payload);
    console.log(response);
    // yield put(setAuth({ ...response }));

    yield put(setLoading(false));
    toast.success("Profile updated successfully");
  } catch (error) {
    yield put(setLoading(false));
    toast.error("Something went wrong");
    console.log(error);
  }
}

const updateUserProfile = (payload) => ({
  type: updateUserProfile.type,
  payload,
});
updateUserProfile.type = "PROFILE/updateUserProfile";

function* watchUpdateUserProfile() {
  yield takeEvery(updateUserProfile.type, handleUpdateUserProfile);
}

function* handleUploadCertificate({ payload }) {
  try {
    yield put(setLoading(true));
    const path = `/nft`;
    const response = yield call([AxiosHost, "post"], path, payload);
    console.log(response);
    // yield put(setAuth({ ...response }));

    yield put(setLoading(false));
    toast.success("Certificate uploaded successfully");
  } catch (error) {
    yield put(setLoading(false));
    toast.error("Something went wrong");
    console.log(error);
  }
}

const uploadCertificate = (payload) => ({
  type: uploadCertificate.type,
  payload,
});
uploadCertificate.type = "PROFILE/uploadCertificate";

function* watchUploadCertificate() {
  yield takeEvery(uploadCertificate.type, handleUploadCertificate);
}

export {
  updateUserProfile,
  watchUpdateUserProfile,
  watchUploadCertificate,
  uploadCertificate,
};
