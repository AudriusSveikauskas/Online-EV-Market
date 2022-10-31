import axios from 'axios';

const post = async (endpoint: string, data: object) =>
  axios({
    url: `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`,
    method: 'POST',
    withCredentials: true,
    data,
  });
export default post;
