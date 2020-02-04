import React from "react";
import { Grid, Typography } from "@material-ui/core";
import lodash from "lodash";
const BlogItem = ({ post }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">{lodash.get(post, "title")}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{lodash.get(post, "body")}</Typography>
      </Grid>
    </Grid>
  );
};

export default BlogItem;
