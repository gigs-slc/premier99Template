import {MMKV} from 'react-native-mmkv';
import {StorageValue} from '../Constants';

export const storage = new MMKV();

export const setItem = (key: string, item: any): void => {
  try {
    storage.set(key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = (key: string): any => {
  try {
    const item = storage.getString(key);
    return item !== undefined ? JSON.parse(item) : null;
  } catch (error) {
    console.error(error);
  }
};

export const saveProfileData = (data: any): void => {
  try {
    const jsonString = JSON.stringify(data);
    storage.set(StorageValue.profile, jsonString);
  } catch (error) {
    console.error('Error saving data to MMKV:', error);
  }
};

export const removeItem = (key: string): void => {
  try {
    storage.delete(key);
  } catch (error) {
    console.error(error);
  }
};

export const clearStorage = (): void => {
  try {
    storage.clearAll();
  } catch (error) {
    console.error(error);
  }
};

export const listener = storage.addOnValueChangedListener(changedKey => {
  const newValue = storage.getString(changedKey);
  console.log(`"${changedKey}" new value: ${newValue}`);
});
