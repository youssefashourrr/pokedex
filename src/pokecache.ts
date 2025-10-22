type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(reapInterval: number) {
        this.#interval = reapInterval;
        this.#startReapLoop();
    }

    add<T>(key: string, data: T): void {
        this.#cache.set(key, {createdAt: Date.now(), val: data})
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        if (entry) {
            return entry.val as T;
        }
        return undefined;
    }

    #reap(): void {
        const now = Date.now();
        for (const [key, entry] of this.#cache) {
            if (now - entry.createdAt > this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop(): void{
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval)
    }

    stopReapLoop(): void {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}