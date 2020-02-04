import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./AppBar.scss";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
const AppBar = ({ title, showBack = false }) => {
  const history = useHistory();
  return (
    <TopBar position="sticky">
      <Toolbar>
        {showBack && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </TopBar>
  );
};

export default AppBar;
