import axios from 'axios';

import * as httpMethods from 'constants/httpMethods';

const BASE_URL = 'https://modi.pw/api/';

const TOKEN = sessionStorage.getItem('KAKAO_TOKEN');
// const TOKEN =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoibW9kaSIsImV4cCI6MTYzOTQ4ODA3MiwiaWF0IjoxNjM5MzE1MjcyLCJ1c2VySWQiOjd9.JonlJnPGOWtbh484IY_LC-Zp-W4vKIQBpaJea_aqaz_B8N1XKFDg_iDIE_rxPbIZWDI5cpv8c985XC8zmI_ImQ';
console.log(TOKEN);
const instance = axios.create({
  baseURL: BASE_URL,
});

const axiosRequest = (uri, requireToken, method = httpMethods.GET, data) => {
  const args = [uri];

  data && args.push(data);
  requireToken && args.push({ headers: { Authorization: `Bearer ${TOKEN}` } });

  return instance[method](...args).then(response => response.data);
};

const get = (uri, requireToken = false) => axiosRequest(uri, requireToken);

const post = (uri, requireToken = false, data = {}) => {
  return axiosRequest(uri, requireToken, httpMethods.POST, data);
};

// const put = (uri, requireToken, data) => {
//   return axiosRequest(uri, requireToken, httpMethods.PUT, data);
// };

// const _delete = (uri, requireToken) => axiosRequest(uri, requireToken);

export const getOttList = () => () => get('/otts');
export const getOtt = ottId => () => get(`/otts/${ottId}`);
export const getOttWaitings = () => () => get('/otts/waitings');
export const getRecruitingParties = (ottId, size = 5, lastPartyId) => {
  let searchParamObj = { size };

  if (lastPartyId) {
    searchParamObj = {
      ...searchParamObj,
      lastPartyId,
    };
  }

  const searchParams = new URLSearchParams(searchParamObj);
  const stringifyParams = searchParams.toString();

  return () => {
    return get(`/otts/${ottId}/parties?${stringifyParams}`);
  };
};
export const getPublicPartyDetail = partyId => () => get(`/parties/${partyId}`);
export const getRules = () => () => get(`/rules`);

export const createNewParty = newPartyData => {
  return () => post(`/parties`, true, newPartyData);
};

export const requestPartyJoin = partyId => () => {
  return post(`/parties/${partyId}/join`, true);
};

export const getSharedAccountInfo = partyId => {
  return () => get(`/parties/${partyId}/sharedAccount`, true);
};

export const chargePoint = point => () => post(`/points/add`, true, point);
export const getMyPoint = () => () => get(`/users/me/points`, true);

export const getMyInfo = () => () => get(`/users/me`, true);
export const getAllMyParty = (status = 'RECEUITING', size = 5, lastPartyId) => {
  let searchParamObj = {
    status,
    size,
  };

  if (lastPartyId) {
    searchParamObj = {
      ...searchParamObj,
      lastPartyId,
    };
  }

  const searchParams = new URLSearchParams(searchParamObj);
  const stringifyParams = searchParams.toString();

  return () => get(`/users/me/parties?${stringifyParams}`, true);
};
export const getMyPartyById = partyId => () => {
  return get(`/users/me/parties/${partyId}`, true);
};
