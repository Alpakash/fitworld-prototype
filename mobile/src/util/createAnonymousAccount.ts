import {Net} from "./Net";
import {magicString} from "./magicString";

export const createAnonymousAccount = async () => {
    const data = await Net.http.post("/auth/anon", {magicString: magicString()});

    return data.data.token;
};
