import Api from "api/Api";
import endpoints from "api/endpoints";

export class PostService {
  static async getPosts() {
    return Api.execute(endpoints.posts);
  }

  static async getPostDetail(postId) {
    return Api.execute(endpoints.posts, "get", {}, postId);
  }

  static async getUserDetail(userId) {
    return Api.execute(endpoints.users, "get", {}, userId);
  }
}
