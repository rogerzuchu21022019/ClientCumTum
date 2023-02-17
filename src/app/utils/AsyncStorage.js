/* Check import */
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LOG} from "../../../logger.config";


const log = LOG.extend(`STORAGE.js`);
export const removeToken =async  (token) => {
  if (token) {
    await AsyncStorage.removeItem(token);
    log.info("🚀 ~ saveToken ~ removeItem first add new item");
  }
};

export const saveToken = async (tokenKey,tokenValue) => {
  await AsyncStorage.setItem(tokenKey, tokenValue);
};

export const getToken = async (tokenKey) => {
  try {
    const item = await AsyncStorage.getItem(tokenKey);
    return item;
  } catch (error) {
    log.error(`error error`);
  }
};

