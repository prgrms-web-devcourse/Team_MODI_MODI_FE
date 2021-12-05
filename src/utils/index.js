import axios from 'axios';

export const getUser = async id => {
  const response = await axios.get(
    `https://198716b8-3226-4714-b0fc-3190ce76b098.mock.pstmn.io/api/users/${id}`,
  );

  return response.data;
};
