import { combineReducers } from "@reduxjs/toolkit";
import {
  reducer as authReducer,
  slice as authSlice,
} from "../features/authentication/authentication-reducer";

import {
  reducer as profileReducer,
  slice as profileSlice,
} from "../features/profile/profile-reducer";


const combinedReducer = combineReducers({
  [authSlice]: authReducer,
  [profileSlice]: profileReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const rootState = rootReducer(undefined, {});

export { rootReducer, rootState };
