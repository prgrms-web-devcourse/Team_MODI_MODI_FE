import axios from 'axios';

import * as httpMethods from 'constants/httpMethods';

const BASE_URL = 'https://modi.pw/api/';

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoibW9kaSIsImV4cCI6MTYzOTQ3Nzg1NywiaWF0IjoxNjM5MzA1MDU3LCJ1c2VySWQiOjE1fQ.SfOeeZRrFQ4WxOFxI8uZ0QnJILszBPR39MWbTI9m_U8f1c2oD5omUobupqAHU95O0sLkng4KoG8VZdDcbbO4rw'; // 임시 토큰

const instance = axios.create({
  baseURL: BASE_URL,
});

const axiosRequest = (uri, requireToken, method = httpMethods.GET, data) => {
  const args = [uri];

  data && args.push(data);
  requireToken && args.push({ headers: { Authorization: `Bearer ${TOKEN}` } });
  console.log(args);

  return instance[method](...args).then(response => response.data);
};

const get = (uri, requireToken = false) => axiosRequest(uri, requireToken);

const post = (uri, requireToken = false, data) => {
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
  console.log(searchParamObj);

  return () => get(`/users/me/parties?${stringifyParams}`, true);
};
export const getMyPartyById = partyId => () => {
  return get(`/users/me/parties/${partyId}`, true);
};
