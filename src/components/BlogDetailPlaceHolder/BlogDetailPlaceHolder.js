import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

const BlogDetailPlaceHolder = ({ lines = 10 }) => {
  return (
    <React.Fragment>
      <Box pt={0.5}>
        <Skeleton width="100%" height={30} />
        <Skeleton width="100%" />
        <Skeleton width="60%" />
      </Box>
    </React.Fragment>
  );
};

export default BlogDetailPlaceHolder;
