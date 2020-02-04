import React, { useEffect } from "react";
import Avatar from "components/Avatar/Avatar";
import Root from "components/Root";
import BlogDetailContainer from "./BlogDetailContainer/BlogDetailContainer";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "2vw"
  }
}));

const BlogDetail = () => {
  const classes = useStyles();

  return (
    <Root title={"Blog Detail"} showBack={true}>
      <Container fixed maxWidth="md" component={Paper} className={classes.container}>
        <BlogDetailContainer className={classes.container} />
      </Container>
    </Root>
  );
};

export default BlogDetail;
