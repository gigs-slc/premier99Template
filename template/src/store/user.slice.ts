import type {StateCreator} from 'zustand';
import type {IAuthedUser} from 'types';

export interface UserSlice {
  user: IAuthedUser | null;
  setUser: (aUser: IAuthedUser) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set, _get, _api) => ({
  user: null,
  setUser: (aUser: IAuthedUser) => set({ user: aUser }),
  clearUser: () => set({ user: null }),
});
