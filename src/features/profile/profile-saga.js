import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { setProfile, setLoading, getProfile } from "./profile-reducer";
import { clear } from "../../redux/clear";
import { AxiosHost } from "../../helpers/axios-global";
import toast from "react-hot-toast";

function* handleUpdateUserProfile({ payload }) {
  try {
    yield put(setLoading(true));
    const profile = yield select(getProfile);

    const path = `/api/v1/user/${profile.profile.authId}`;
    const response = yield call([AxiosHost, "put"], path, payload);
    console.log(response);
    // yield put(setAuth({ ...response }));

    yield put(setLoading(false));
    toast.success("Profile updated successfully")
  } catch (error) {
    yield put(setLoading(false));
    toast.error("Something went wrong")
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

export { updateUserProfile, watchUpdateUserProfile };
