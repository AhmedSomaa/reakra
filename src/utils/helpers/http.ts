import axios from "axios";
import { httpConfig } from "utils/constants";

export default axios.create({
    baseURL: httpConfig.BACKEND_HOST,
    headers: {
        "Content-type": "application/json"
    }
});
