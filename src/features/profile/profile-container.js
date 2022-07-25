import React, { useState } from "react";
import ProfileComponent from "./profile-component";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { getAuth } from "../authentication/authentication-reducer";
import { updateUserProfile } from "./profile-saga";
import { getLoading } from "./profile-reducer";
const mapStateToProps = (state) => ({
  user: getAuth(state),
  loading: getLoading(state),
});
const ProfileContainer = compose(
  connect(mapStateToProps, { updateUserProfile })
)(({ user, updateUserProfile, loading }) => {
  const tabs = ["Profile", "Certificates"];
  const [activeTab, setActiveTab] = useState("Profile");
  const [values, setValues] = useState({
    fullName: "",
    email: user?.userData?.email,
    phoneNumber: "",
    facebook: "",
    twitter: "",
    instagram: "",
    country: "",
    bio: "",
    linkedin: "",
    location: "",
  });
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(values);
  };
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
  return (
    <ProfileComponent
      handleChangeTab={handleChangeTab}
      activeTab={activeTab}
      tabs={tabs}
      user={user}
      openModal={openModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      onChange={onChange}
      values={values}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
});
export default ProfileContainer;
