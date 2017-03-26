import { AsyncStorage } from 'react-native';

export default class CookieService {

  async get(key) {
    let value = null;

    try {
      value = await AsyncStorage.getItem(key);
    } catch(err) {}

    return value;
  }

  async set(key,value) {
    await AsyncStorage.setItem(key,value);
  }

  async remove(key) {
    await AsyncStorage.removeItem(key);
  }

  async clear() {
    return await AsyncStorage.clear();
  }

}
