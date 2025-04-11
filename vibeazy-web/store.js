import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)

export const accessTokenStore = create(
    persist(
      (set) => ({
        accessToken: null,
        setAccessToken: (accessToken) => set({ accessToken }),
      }),
      {
        name: 'access-token-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

  export const isauthmodalopenStore = create((set) => ({
    isAuthModalOpen: false,
    setIsAuthModalOpen: (isAuthModalOpen) => set({ isAuthModalOpen }),
  }));
