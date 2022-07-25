import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  getEmbedKukai,
  setAuth,
  setError,
  setLoading,
  setSuccess,
} from "./authentication-reducer";
import { clear } from "../../redux/clear";
import { history } from "../../helpers/browser";
import { AxiosHostNoHeaders } from "../../helpers/axios-global";
import { setProfile } from "../profile/profile-reducer";
import toast from "react-hot-toast";

function* handleLogin() {
  try {
    yield put(setLoading(true));
    yield put(setSuccess(false));
    yield put(setError(""));
    const embedKukai = yield select(getEmbedKukai);
    if (!embedKukai.initialized) {
      yield call([embedKukai, "init"]);
    }
    const response = yield call([embedKukai, "login"]);
    const payload = {
      email: response.userData.email,
      userType: "holder",
      address: response.pkh,
      privateKey: response.pk,
      profilePicture: response?.userData?.profileImage,
    };
    const path = "/auth";
    const { data } = yield call([AxiosHostNoHeaders, "post"], path, payload);
    yield put(setProfile(data?.data));
    yield put(setAuth({ ...response }));
    yield put(setSuccess(true));
    yield put(setLoading(false));
    yield call([localStorage, localStorage.setItem], "token", data?.data.token);
    toast.success("Login successful")
    // yield call([history, history.push], "/profile");
  } catch (error) {
    yield put(setLoading(false));
    console.log(error.response);
  }
}

const login = (payload) => ({ type: login.type, payload });
login.type = "AUTHENTICATION/login";

function* watchLogin() {
  yield takeLatest(login.type, handleLogin);
}

function* handleSignOut() {
  yield put(clear());
  const embedKukai = yield select(getEmbedKukai);
  yield call([embedKukai, "logout"]);
  yield put(setAuth(null));
}

const signOut = (payload) => ({ type: signOut.type, payload });
signOut.type = "AUTHENTICATION/signOut";

function* watchSignOut() {
  yield takeEvery(signOut.type, handleSignOut);
}

export { watchLogin, watchSignOut, signOut, login, handleSignOut, handleLogin };
