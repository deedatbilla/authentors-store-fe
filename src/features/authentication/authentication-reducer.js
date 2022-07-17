import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";

const slice = "auth";

const initialState = {
  user: null,
  loading: false,
  error: "",
  embedKukai: null,
};

export const {
  actions: { setAuth, setLoading, setError, setEmbedKukai },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setAuth: createSetter("user"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
    setEmbedKukai: createSetter("embedKukai"),
  },
});

const getAuthenticationState = prop(slice);
const getAuth = pipe(getAuthenticationState, prop("user"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));
const getEmbedKukai = pipe(getAuthenticationState, prop("embedKukai"));

export {
  getAuthenticationState,
  getLoading,
  getAuth,
  getError,
  slice,
  getEmbedKukai,
};
