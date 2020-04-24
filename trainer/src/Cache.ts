export type CacheType = {
    token: string,
} | undefined

export class Cache {
    private static key = "fitworld-trainer-interface-cache-react";
    static cache: CacheType = undefined;

    static get() {
        const a = JSON.parse(localStorage.getItem(Cache.key) ?? "{}");
        this.cache = a;
        return a;
    }

    static set(val: object) {
        localStorage.setItem(Cache.key, JSON.stringify({
            ...this.get(),
            ...val
        }));
        Cache.cache = this.get();
        return Cache.cache;
    }
}
