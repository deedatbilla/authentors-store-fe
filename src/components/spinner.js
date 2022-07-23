import { Backdrop } from "@material-ui/core";
import React from "react";
import { MoonLoader } from "react-spinners";
function Spinner({ loading }) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <Backdrop
      style={{
        mt: "0px !important",
        height: "100vh",
        width: "100vw",
        zIndex: 5000,
      }}
      open={loading}
    >
      <MoonLoader
        color={"#fff"}
        loading={loading}
        cssOverride={override}
        size={120}
      />
    </Backdrop>
  );
}

export default Spinner;
