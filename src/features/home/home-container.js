import React, { useEffect, useState } from "react";
import HomeComponent from "./home-component";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { login } from "../authentication/authentication-saga";
import {
  getEmbedKukai,
  getLoading,
} from "../authentication/authentication-reducer";
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  embedKukai: getEmbedKukai(state),
});

const HomeContainer = compose(
  connect(mapStateToProps, {
    login,
  })
)(({ loading, embedKukai,login }) => {
  const handleLogin = async () => {
    login();
  };

  return <HomeComponent loading={loading} handleLogin={handleLogin} />;
});

export default HomeContainer;
