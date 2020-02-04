import createApiReducer from "utils/createApiReducer";
import { GET_POSTS, GET_POST_DETAIL, GET_USER_DETAIL } from "api/apiActionTypes";

const initialState = {
  posts: {},
  postDetail: {},
  userDetail: {}
};

const posts = createApiReducer(initialState, [GET_POSTS, GET_POST_DETAIL, GET_USER_DETAIL]);

export default posts;
