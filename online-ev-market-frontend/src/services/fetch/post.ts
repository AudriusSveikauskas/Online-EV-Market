import axios from 'axios';

const post = async (endpoint: string, data: object) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`, data);

export default post;
