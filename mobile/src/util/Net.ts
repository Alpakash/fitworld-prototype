import axios from "axios";

export class Net {
    public static baseConf = {
        baseURL: "https://api.fitworld.io",
    };

    public static http = axios.create(Net.baseConf);
}
