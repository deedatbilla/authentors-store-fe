import React, { useEffect, useState } from "react";
import HomeComponent from "./home-component";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { login } from "../authentication/authentication-saga";
import {
  getEmbedKukai,
  getLoading,
  getSuccess,
} from "../authentication/authentication-reducer";
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  embedKukai: getEmbedKukai(state),
  success: getSuccess(state),
});

const HomeContainer = compose(
  connect(mapStateToProps, {
    login,
  })
)(({ loading, embedKukai, login, success }) => {
  const [openModal, setOPenModal] = useState(false);
  const handleOpenModal = () => {
    setOPenModal(true);
  };
  const handleCloseModal = () => {
    setOPenModal(false);
  };

  useEffect(() => {
    if (success) {
      handleOpenModal();
    }
  }, [success]);

  const handleLogin = async () => {
    await login();
  };

  return (
    <HomeComponent
      loading={loading}
      handleLogin={handleLogin}
      openModal={openModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    />
  );
});

export default HomeContainer;
