import _ from 'lodash'
import { PersistentStorage } from 'apollo-cache-persist/types'

export class StorageHandler<T> implements PersistentStorage<T> {
    static whitelist = [];
    static storage: Storage = window.localStorage;

    checkIfStorageIsSet = () => {
        if (!StorageHandler.storage) {
            throw new Error("storage is not set");
        } else if (StorageHandler.whitelist.length == 0) {
            console.warn("whitelist not set on storage layer, going to persist all data (including queries)");
        }
    }

    getItem = (key: string) => {
        this.checkIfStorageIsSet();
        return JSON.parse(window.localStorage.getItem(key) as string)
    }

    removeItem = (key: string) => {
        this.checkIfStorageIsSet();
        return window.localStorage.removeItem(key)
    }

    setItem = (key: string, data: T) => {
        this.checkIfStorageIsSet();
        // @ts-ignore
        let obj = data.ROOT_QUERY;
        if (StorageHandler.whitelist.length > 0) {
            // @ts-ignore
            obj = _.pick(data.ROOT_QUERY, StorageHandler.whitelist)
        }
        return window.localStorage.setItem(key, JSON.stringify({
            ROOT_QUERY: obj
        }))
    }
}
