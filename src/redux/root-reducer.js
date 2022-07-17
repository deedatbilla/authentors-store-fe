import { combineReducers } from "@reduxjs/toolkit";
import {
  reducer as authReducer,
  slice as authSlice,
} from "../features/authentication/authentication-reducer";


const combinedReducer = combineReducers({
  [authSlice]: authReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const rootState = rootReducer(undefined, {});

export { rootReducer, rootState };
