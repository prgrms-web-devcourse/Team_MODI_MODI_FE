const NAVER_CLIENT_ID = 'mAu7G0gn80q0H7cs4feU';
const NAVER_CALLBACK_URL = 'http://localhost:3000/oauth/callback/naver';
const STATE_STRING = encodeURI('modi');

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_CALLBACK_URL}`;
