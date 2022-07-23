import React, { useState } from "react";
import ProfileComponent from "./profile-component";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { getAuth } from "../authentication/authentication-reducer";
const mapStateToProps = (state) => ({
  user: getAuth(state),
});

const ProfileContainer = compose(connect(mapStateToProps, {}))(({ user }) => {
  const tabs = ["Profile", "Certificates"];
  const [activeTab, setActiveTab] = useState("Profile");
  const [openModal, setOPenModal] = useState(false);
  const handleOpenModal = () => {
    setOPenModal(true);
  };
  const handleCloseModal = () => {
    setOPenModal(false);
  };
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  console.log(user,"here")
  return (
    <ProfileComponent
      handleChangeTab={handleChangeTab}
      activeTab={activeTab}
      tabs={tabs}
      user={user}
      openModal={openModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    />
  );
});
export default ProfileContainer;
