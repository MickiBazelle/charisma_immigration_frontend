import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create(
    persist(
      (set, get) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        setLoading: (loading) => set({ loading }),
        isLoggedIn: () => get().user !== null,
      }),
      {
        name: 'user-storage', // Name of the item in local storage
        storage: createJSONStorage(() => localStorage)
      }
    )
  );
  
  export  {useUserStore};