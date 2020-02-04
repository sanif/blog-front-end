import React from "react";
import AvatarImage from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import lodash from "lodash";
const useStyles = makeStyles(theme => ({
  avatar: {
    textAlign: "center",
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    width: "75px",
    height: "75px"
  }
}));

const Avatar = ({ user }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AvatarImage className={classes.avatar}>{lodash.get(user, "name", "").slice(0, 1)}</AvatarImage>
      <Typography align="center" variant="body1">
        {lodash.get(user, "name")}
      </Typography>
    </React.Fragment>
  );
};

export default Avatar;
