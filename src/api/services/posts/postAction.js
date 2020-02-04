import { GET_POSTS, GET_POST_DETAIL, GET_USER_DETAIL } from "api/apiActionTypes";
import { PostService } from "./PostService";

export const getPostsAction = () => {
  return {
    actionType: GET_POSTS,
    callAPI: () => PostService.getPosts(),
    stateObject: "posts"
  };
};

export const getPostDetail = postId => {
  return {
    actionType: GET_POST_DETAIL,
    callAPI: () => PostService.getPostDetail(postId),
    stateObject: "postDetail"
  };
};

export const getUserDetail = userId => {
  return {
    actionType: GET_USER_DETAIL,
    callAPI: () => PostService.getUserDetail(userId),
    stateObject: "userDetail"
  };
};
