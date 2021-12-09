import axios from 'axios';

import * as httpMethods from 'constants/httpMethods';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const TOKEN = '123123'; // 임시 토큰

const instance = axios.create({
  baseURL: BASE_URL,
});

const axiosRequest = (uri, requireToken, method = httpMethods.GET, data) => {
  const config = { data };

  requireToken &&
    Object.assign(config, { headers: { Authorization: `Bearer ${TOKEN}` } });

  return instance[method](uri, config).then(response => response.data);
};

const get = (uri, requireToken = false) => axiosRequest(uri, requireToken);

// const post = (uri, requireToken, data) => {
//   return axiosRequest(uri, requireToken, httpMethods.post, data);
// };

// const put = (uri, requireToken, data) => {
//   return axiosRequest(uri, requireToken, httpMethods.PUT, data);
// };

// const _delete = (uri, requireToken) => axiosRequest(uri, requireToken);

export const getTodo = todoId => () => get(todoId);
