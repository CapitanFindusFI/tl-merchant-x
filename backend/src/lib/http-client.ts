import axios, { AxiosInstance } from 'axios';

class HttpClient {
  private static instance: AxiosInstance;

  static getClient() {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create();
    }

    return HttpClient.instance;
  }
}

export default HttpClient;
