import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";

const slice = "auth";

const initialState = {
  user: null,
  loading: false,
  error: "",
  embedKukai: null,
  success:false
};

export const {
  actions: { setAuth, setLoading, setError, setEmbedKukai,setSuccess },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setAuth: createSetter("user"),
    setLoading: createSetter("loading"),
    setSuccess: createSetter("success"),
    setError: createSetter("error"),
    setEmbedKukai: createSetter("embedKukai"),
  },
});

const getAuthenticationState = prop(slice);
const getAuth = pipe(getAuthenticationState, prop("user"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));
const getEmbedKukai = pipe(getAuthenticationState, prop("embedKukai"));
const getSuccess = pipe(getAuthenticationState, prop("success"));

export {
  getAuthenticationState,
  getLoading,
  getAuth,
  getError,
  slice,
  getSuccess,
  getEmbedKukai,
};
