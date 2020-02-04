/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import BlogTableHeader from "components/BlogTableHeader";
import BlogTableRow from "components/BlogTableRow";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "api/services/posts/postAction";
import Skeleton from "@material-ui/lab/Skeleton";
import BlogListPlaceHolder from "components/BlogListPlaceholder";
import { useHistory } from "react-router-dom";
const BlogListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, data, error } = useSelector(state => state.posts.posts);

  //Loading posts only one time
  useEffect(() => {
    if (!data) dispatch(getPostsAction());
  }, []);

  const onRowClick = postId => {
    history.push(`/blogs/${postId}`);
  };
  return (
    <TableContainer component={Paper}>
      {loading ? (
        <BlogListPlaceHolder />
      ) : (
        <Table stickyHeader aria-label="Posts">
          <BlogTableHeader />
          <BlogTableRow items={data} onRowClick={onRowClick} />
        </Table>
      )}
    </TableContainer>
  );
};

export default BlogListContainer;
