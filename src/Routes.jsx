import { KukaiEmbed } from "kukai-embed";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/headers/nav-header";
import {
  getEmbedKukai,
  setEmbedKukai,
} from "./features/authentication/authentication-reducer";
import Home from "./features/home/home-container";
import Profile from "./features/profile/profile-container";
import Footer from "./layouts/footer";
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
          })
        )
      );
    }
  }, []);
  return (
    <Router>
      <NavHeader />
      <Switch>
        {/* <Route path="/register" component={SellLand} />
        <Route path="/land/:id" component={LandDetails} />
        <Route path="/my-lands" component={MyLands} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
