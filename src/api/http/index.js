import axios from "axios";
import isFunction from "lodash/isFunction";

export class API {
  failedResponse = (error, callback) => {
    const data =
      error.response && error.response.data ? error.response.data : error;
    if (callback && isFunction(callback)) {
      callback(data);
    }
    return Promise.reject(data);
  };

  fetch(route, config={}, callback) {
    if (!route) {
      return Promise.reject();
    }
    return axios
      .get(route, config)
      .then((response) => {
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  }

  postRequest = (route, data, config, callback) => {
    if (!route) {
      return Promise.reject();
    }
    return axios
      .post(route, data, config)
      .then((response) => {
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  };
}

const Api = new API();

// Request interceptor
// axios.interceptors.request.use(
//   async (config) => {
//     return Promise.resolve(config);
//   },
//   (error) => Promise.reject(error)
// );

// // // Response interceptor
// axios.interceptors.response.use(undefined, (error) => {
//   return Promise.reject(error);
// });

export default Api;
