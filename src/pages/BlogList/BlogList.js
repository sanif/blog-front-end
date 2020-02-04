import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "components/AppBar/AppBar";
import BlogListContainer from "./BlogListContainer";
import Root from "components/Root";

const BlogList = () => {
  return (
    <Root title={"Blogs"}>
      <Container fixed maxWidth="md" disableGutters>
        <BlogListContainer />
      </Container>
    </Root>
  );
};

export default BlogList;
