import axios from 'axios';
// import getItem from '@/services/localStorage/getItem';

const get = async (endpoint: string, id?: string) => {
  // const token = getItem('user');

  let url;
  if (id === undefined) {
    url = `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`;
  } else {
    url = `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}/${id}`;
  }

  return axios({
    url,
    method: 'GET',
    withCredentials: true,
    // headers: { 'x-access-token': token },
  });
};

export default get;
