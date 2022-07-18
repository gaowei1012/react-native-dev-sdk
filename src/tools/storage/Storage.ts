import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageTools {
  /**
   * 添加缓存
   * @param key 存入的Storage名称
   * @param value 存入的数据
   */
  static async setStorage(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      throw e;
    }
  }

  /**
   * 获取缓存
   * @param key 获取缓存名称
   */
  static async getStorage(key: string) {
    try {
      const result = await AsyncStorage.getItem(key);
      return result != null ? JSON.parse(result) : null;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 合并两个缓存的值
   * key1: 20, key2: 30
   * @param key 存入的Storage名称
   * @param value 存入的数据
   */
  static async moregeStorage(key: string, value: any) {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (e) {
      throw e;
    }
  }

  /**
   * 清除全部缓存
   */
  static async clearAllStorage() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      throw e;
    }
  }
}

export { StorageTools };
