import axios from "axios";
import { API_URL } from "../constants/config";

const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
        "content-type": "application/json"
    }
})

export default httpClient;