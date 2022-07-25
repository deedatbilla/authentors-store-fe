import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
function App() {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Toaster position="top-right" />
      <div className="">
        <Routes />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
