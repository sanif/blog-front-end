import axiosInstance from "./axios";

export default class Api {
  static execute = async (
    url,
    httpMethod = "get",
    attrs = {
      body: {},
      params: {},
      data: {},
      headers: {}
    },
    path,
    hasAuth = false,
    enableCookie = false,
    customToken
  ) => {
    const newAttrs = (attrs = {
      body: {},
      params: {},
      data: {},
      headers: {},
      ...attrs
    });
    newAttrs.headers["Content-Type"] = "application/json";
    if (enableCookie) {
      newAttrs["withCredentials"] = true;
    }
    let newUrl = url;
    if (path) {
      newUrl = url + "\\" + path;
    }

    return await axiosInstance({
      method: httpMethod,
      url: newUrl,
      ...newAttrs
    })
      .then(
        response => {
          console.log("BaseService", response);
          let code = response && response.status;
          let data = response && response.data;

          if (code === 200) {
            return Promise.resolve(data);
          } else {
            console.log((response.data && response.data.message) || "Something went wrong while fetching!");

            return Promise.reject({
              response: code,
              data: data,
              message: response && response.data && response.data.message
            });
          }
        },
        error => {
          console.error("BaseService reject", error);
          return Promise.reject(error);
        }
      )
      .catch(err => {
        console.log("Error", err);
        return Promise.reject(err);
      });
  };
}
