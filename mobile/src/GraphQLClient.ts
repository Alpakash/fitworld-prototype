import {InMemoryCache} from "apollo-cache-inmemory";
import {persistCache} from "apollo-cache-persist";
import AsyncStorage from "@react-native-community/async-storage";
import _ from "lodash";
import {ApolloClient, HttpLink} from "apollo-boost";

export interface ICache {
    token: string | undefined;
}

class GraphQLClient {
    static whitelist = ['token'];
    public client: any = undefined;
    public static readonly cacheKey = "fitworld-mobile";

    setupClient = async () => {
        const cache = new InMemoryCache();
        const storage = {
            ...AsyncStorage,
            getItem: async function (key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null> {
                const obj = JSON.parse((await AsyncStorage.getItem(key)) ?? "{}") as unknown as { ROOT_QUERY: object };
                if (!obj) throw new Error('failed to get cache');
                const whitelistedObj = JSON.stringify({
                    ROOT_QUERY: _.pick(obj.ROOT_QUERY, GraphQLClient.whitelist)
                });
                await AsyncStorage.setItem(key, whitelistedObj);
                return whitelistedObj;
            }
        };
        await persistCache({
            key: GraphQLClient.cacheKey,
            cache,
            //@ts-ignore
            storage,
        });
        const stored = JSON.parse((await storage.getItem(GraphQLClient.cacheKey)) ?? "{}").ROOT_QUERY as ICache;

        this.client = new ApolloClient({
            link: new HttpLink({
                uri: 'https://api.fitworld.io/graphql',
                headers: {
                    authorization: stored.token
                },
            }),
            cache,
            resolvers: []
        });

        return stored;
    };

    getClient = (): ApolloClient<any> => {
        return this.client
    }
}

export const client = new GraphQLClient();
