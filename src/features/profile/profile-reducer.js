import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";

const slice = "profile";

const initialState = {
  profile: {},
  loading: false,
  error: "",
 
};

export const {
  actions: { setProfile, setLoading, setError},
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setProfile: createSetter("profile"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
    
  },
});

const getProfileState = prop(slice);
const getProfile = pipe(getProfileState, prop("profile"));
const getLoading = pipe(getProfileState, prop("loading"));
const getError = pipe(getProfileState, prop("error"));

export {
  getProfileState,
  getLoading,
  getProfile,
  getError,
  slice,
};
