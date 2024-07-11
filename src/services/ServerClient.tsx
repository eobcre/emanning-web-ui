import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://www.emanning.dev',
});

interface getParams {
  [key: string]: any;
}

class ServerClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get(params: getParams) {
    console.log('Reached get API with params:', params);
    const config = {
      headers: {},
      params: params,
    };
    return axiosClient.get(this.endpoint, config).then((res) => res);
  }

  post(params: getParams) {
    console.log('Attempting to send a post with params:', params);
    const config = {
      headers: {},
    };
    return axiosClient.post(this.endpoint, params, config).then((res) => res);
  }
}

export default ServerClient;
