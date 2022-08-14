import { KukaiEmbed } from "kukai-embed";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/headers/nav-header";
import Spinner from "./components/spinner";
import {
  getEmbedKukai,
  setAuth,
  setEmbedKukai,
  setLoading,
} from "./features/authentication/authentication-reducer";
import { PublicRoute, PrivateRoute } from "./helpers";
import Footer from "./layouts/footer";
const Home = React.lazy(() => import("./features/home/home-container"));
const Profile = React.lazy(() =>
  import("./features/profile/profile-container")
);
const MintPage = React.lazy(() => import("./features/mint/mint-container"));
function Routes() {
  const dispatch = useDispatch();
  const embedKukai = useSelector(getEmbedKukai);

  useEffect(() => {
    if (!embedKukai) {
      dispatch(
        setEmbedKukai(
          new KukaiEmbed({
            net: "https://ithacanet.kukai.app",
            icon: false,
            enableLogging: false,
          })
        )
      );
    }
  }, []);
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embedKukai, dispatch]);

  const init = async () => {
    if (!embedKukai) {
      dispatch(setLoading(true));

      await embedKukai?.init();
      const userData = embedKukai?.user;
      if (userData) {
        dispatch(setAuth(userData));
      }
      dispatch(setLoading(false));
    }
  };
  return (
    <Router>
      <NavHeader />
      <React.Suspense fallback={<Spinner loading={true} />}>
        <Switch>
          <PrivateRoute
            restricted={false}
            path="/profile"
            component={Profile}
          />
          <PublicRoute restricted={false} path="/mint" component={MintPage} />
          <PublicRoute restricted={false} path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default Routes;
