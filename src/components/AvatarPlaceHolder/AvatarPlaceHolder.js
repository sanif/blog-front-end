import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

const AvatarPlaceHolder = ({ lines = 10 }) => {
  return (
    <React.Fragment>
      <Box pt={0.5}>
        <Skeleton variant="circle" width={75} height={75} />
        <Skeleton width="100%" />
      </Box>
    </React.Fragment>
  );
};

export default AvatarPlaceHolder;
