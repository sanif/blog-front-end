/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import BlogItem from "components/BlogItem";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail, getUserDetail } from "api/services/posts/postAction";
import AvatarPlaceHolder from "components/AvatarPlaceHolder";
import BlogDetailPlaceHolder from "components/BlogDetailPlaceHolder";

const BlogDetailContainer = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { loading, data, error } = useSelector(state => state.posts.postDetail);
  const { loading: userLoading, data: userData, error: userError } = useSelector(state => state.posts.userDetail);

  useEffect(() => {
    dispatch(getPostDetail(match.params.postId));
  }, [match.params.postId]);

  useEffect(() => {
    if (data) dispatch(getUserDetail(data.userId));
  }, [data]);

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={2}>
        <Grid container justify="center" direction="column" alignItems="center">
          {userLoading || loading ? <AvatarPlaceHolder /> : <Avatar user={userData} />}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={10}>
        {userLoading || loading ? <BlogDetailPlaceHolder /> : <BlogItem post={data} />}
      </Grid>
    </Grid>
  );
};

export default BlogDetailContainer;
