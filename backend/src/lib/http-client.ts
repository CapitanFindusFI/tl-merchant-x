import axios, { AxiosInstance } from "axios";

class HttpClient {
    private static instance: AxiosInstance;

    static getInstance() {
        if (!HttpClient.instance) {
            HttpClient.instance = axios.create();
        }
        return HttpClient.instance;
    }
}

export default HttpClient;