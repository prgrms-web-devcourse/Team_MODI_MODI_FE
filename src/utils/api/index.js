import axios from 'axios';

import * as httpMethods from 'constants/httpMethods';

const BASE_URL = 'https://modi.pw/api/';

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

const post = (uri, requireToken, data) => {
  return axiosRequest(uri, requireToken, httpMethods.POST, data);
};

// const put = (uri, requireToken, data) => {
//   return axiosRequest(uri, requireToken, httpMethods.PUT, data);
// };

// const _delete = (uri, requireToken) => axiosRequest(uri, requireToken);

export const getOttList = () => () => get('/otts');
export const getOtt = ottId => () => get(`/otts/${ottId}`);
export const getOttWaitings = () => () => get('/otts/waitings');
export const getRecruitingParties = (ottId, searchParamObj) => {
  const searchParams = new URLSearchParams(searchParamObj);
  const stringifyParams = searchParams.toString();

  return () => {
    return get(`/otts/${ottId}/parties?${stringifyParams}`);
  };
};

export const getPublicPartyDetail = partyId => () => get(`/parties/${partyId}`);
export const getRules = () => () => get(`/rules`);
