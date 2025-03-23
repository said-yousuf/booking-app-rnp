import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { currentUserProfile } from '@/api/profile';
import { zustandStorage } from '@/common/tools/storage';

interface State {
  token: string | null;
  currentUser: User | null;
}

interface Action {
  setToken: (token: State['token']) => void;
  setCurrentUser: (currentUser: State['currentUser']) => void;
  fetchCurrentUser: () => void;
  clearToken: () => void;
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: null,
      currentUser: null,
      setToken: (token) => set({ token }),
      setCurrentUser: (currentUser) => set({ currentUser }),
      fetchCurrentUser: async () => {
        const currentUser = await currentUserProfile();
        set(() => ({ currentUser }));
      },
      clearToken: () => set(() => ({ token: null, currentUser: null })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
