import { PersistentStorage } from 'apollo-cache-persist/types'
import _ from 'lodash'

export class Storage<T> implements PersistentStorage<T> {
  static readonly whitelist = ['mySuperSecretToken']

  getItem = (key: string) => {
    return JSON.parse(window.localStorage.getItem(key) as string)
  }

  removeItem = (key: string) => {
    return window.localStorage.removeItem(key)
  }

  setItem = (key: string, data: T) => {
    // @ts-ignore
    const obj = _.pick(data.ROOT_QUERY, Storage.whitelist)
    return window.localStorage.setItem(key, JSON.stringify({
      ROOT_QUERY: obj
    }))
  }
}
