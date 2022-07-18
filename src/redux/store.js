import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // FLUSH,
  // PAUSE,
  // PERSIST,
  persistReducer,
  // PURGE,
  // REGISTER,
  // REHYDRATE,
} from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer.js";
import { rootSaga } from "./root-saga.js";
import storage from "./storage.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const middleware = getDefaultMiddleware({
  thunk: true,
  // serializableCheck: {
  //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // },
  serializableCheck: false
});

// if (process.env.NODE_ENV === `development`) {
//   const { createLogger } = require(`redux-logger`);

//   const logger = createLogger({});

//   middleware.push(logger);
// }

const sagaMiddleWare = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...middleware, sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
