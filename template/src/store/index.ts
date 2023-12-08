import type {UserSlice} from './user.slice';

import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {zustandStorage} from './store.storage';

import {createUserSlice} from './user.slice';

export const useRootStore = create(
  persist<UserSlice>(createUserSlice, {
    name: 'root-store',
    storage: createJSONStorage(() => zustandStorage),
  }),
);
