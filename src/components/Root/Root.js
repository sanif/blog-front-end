import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "components/AppBar/AppBar";

const Root = ({ title, children, showBack = false }) => {
  return (
    <Container disableGutters>
      <AppBar title={title} showBack={showBack} />
      <div style={{ flex: "1" }}>{children}</div>
    </Container>
  );
};

export default Root;
