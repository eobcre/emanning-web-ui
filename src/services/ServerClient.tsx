import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
});

interface ParamsProps {
  [key: string]: any;
}

class ServerClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get(params: ParamsProps) {
    console.log('Reached get API with params:', params);
    const config = {
      params: params,
    };
    return axiosClient.get(this.endpoint, config).then((res) => res);
  }

  post(params: ParamsProps) {
    console.log('Attempting to send a post with params:', params);
    return axiosClient.post(this.endpoint, params).then((res) => res);
  }
}

export default ServerClient;
