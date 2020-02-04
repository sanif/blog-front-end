import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

const BlogListPlaceHolder = ({ lines = 10 }) => {
  return <React.Fragment>{createItems(lines)}</React.Fragment>;
};

const createItems = lines => {
  const items = [];
  for (let i = 0; i < lines; i++) {
    items.push(
      <React.Fragment key={i}>
        <Box pt={0.5}>
          <Skeleton width="100%" height={45} />
          <Skeleton width="60%" />
        </Box>
      </React.Fragment>
    );
  }
  return items;
};

export default BlogListPlaceHolder;
