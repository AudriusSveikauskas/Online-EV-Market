import axios from 'axios';
import getItem from '@/services/localStorage/getItem';

const post = async (endpoint: string, data: object) => {
  const token = getItem('user');

  return axios({
    url: `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`,
    method: 'POST',
    headers: { 'x-access-token': token },
    data,
  });
};

export default post;
