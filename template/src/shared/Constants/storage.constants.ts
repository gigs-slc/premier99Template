export const StorageValue = {
  user: 'user',
  token: 'token',
  profile: 'profile',
  refresh: 'refresh',
};

export type TStorage = typeof StorageValue;
export type TStorageKeyValue = keyof TStorage;
export type TStorageValue = TStorage[TStorageKeyValue];
