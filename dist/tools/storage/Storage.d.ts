declare class StorageTools {
    /**
     * 添加缓存
     * @param key 存入的Storage名称
     * @param value 存入的数据
     */
    static setStorage(key: string, value: any): Promise<void>;
    /**
     * 获取缓存
     * @param key 获取缓存名称
     */
    static getStorage(key: string): Promise<any>;
    /**
     * 合并两个缓存的值
     * key1: 20, key2: 30
     * @param key 存入的Storage名称
     * @param value 存入的数据
     */
    /**
     * 清除全部缓存
     */
    static clearAllStorage(): Promise<void>;
}
export { StorageTools };
