import axios from 'axios';

const get = async (endpoint: string, id?: string) => {
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
  });
};

export default get;
