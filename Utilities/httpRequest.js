import axios from 'axios';

const axiosHeader = getRequestHeader();
const httpRequest = axios.create({
  headers: axiosHeader
});

export default httpRequest;