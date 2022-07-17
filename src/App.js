import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <div className="">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
