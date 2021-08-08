import { httpConfig } from "utils/constants";
import http from "utils/helpers/http";

export default class UserSerivce {
    static async getAll() {
        try {
            const { data } = await http.get(httpConfig.USERS_ENDPOINT);
            return data;
        } catch (error) {
            Promise.reject(error);
        }
    }

    static async get(userId: number) {
        try {
            const { data } = await http.get(`${httpConfig.USERS_ENDPOINT}/${userId}`);
            return data;
        } catch (error) {
            Promise.reject(error);
        }
    }
}
