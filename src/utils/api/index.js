import axios from 'axios';
import { API_END_POINT } from 'constants/environment';

import * as httpMethods from 'constants/httpMethods';

const instance = axios.create({
  baseURL: API_END_POINT,
});

const axiosRequest = (uri, requireToken, method = httpMethods.GET, data) => {
  const args = [uri];

  data && args.push(data);

  if (requireToken) {
    const TOKEN = JSON.parse(sessionStorage.getItem('TOKEN'));
    args.push({ headers: { Authorization: `Bearer ${TOKEN}` } });
  }

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

export const getOttList = () => get('/otts');
export const getOtt = ottId => get(`/otts/${ottId}`);
export const getOttWaitings = () => get('/otts/waitings');
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

  return get(`/otts/${ottId}/parties?${stringifyParams}`);
};
export const getPartyDetail = partyId => get(`/parties/${partyId}`);
export const getRules = () => get(`/rules`);

export const createNewParty = newPartyData => {
  return post(`/parties`, true, newPartyData);
};

export const requestPartyJoin = partyId => {
  return post(`/parties/${partyId}/join`, true);
};

export const getSharedAccountInfo = partyId => {
  return get(`/parties/${partyId}/sharedAccount`, true);
};

export const chargePoint = point => post(`/points/add`, true, point);
export const getMyPoint = () => get(`/users/me/points`, true);

export const getMyInfo = () => get(`/users/me`, true);
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

  return get(`/users/me/parties?${stringifyParams}`, true);
};
export const getMyPartyById = partyId => {
  return get(`/users/me/parties/${partyId}`, true);
};
