import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  getEmbedKukai,
  setAuth,
  setError,
  setLoading,
} from "./authentication-reducer";
import { clear } from "../../redux/clear";

function* handleLogin() {
  try {
    yield put(setLoading(true));
    yield put(setError(""));
    const embedKukai = yield select(getEmbedKukai);
    console.log("first", embedKukai.initialized);
    if (!embedKukai.initialized) {
      yield call([embedKukai, "init"]);
      // await embedKukai.init();
    }
  //  yield call([embedKukai, "logout"]);
    const response = yield call([embedKukai, "login"]);
    yield put(setAuth({ ...response }));

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

const login = (payload) => ({ type: login.type, payload });
login.type = "AUTHENTICATION/login";

function* watchLogin() {
  yield takeLatest(login.type, handleLogin);
}

function* handleSignOut() {
  yield put(clear());
}

const signOut = (payload) => ({ type: signOut.type, payload });
signOut.type = "AUTHENTICATION/signOut";

function* watchSignOut() {
  yield takeEvery(signOut.type, handleSignOut);
}

export { watchLogin, watchSignOut, signOut, login, handleSignOut, handleLogin };
