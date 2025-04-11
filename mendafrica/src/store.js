import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const useModalStore = create((set) => ({
  // Sign Up Modal State
  isSignUpModalOpen: false,
  toggleSignUpModal: () => {
    set((state) => ({ isSignUpModalOpen: !state.isSignUpModalOpen }));
  },

  // Sign In Modal State
  isSignInModalOpen: false,
  toggleSignInModal: () => {
    set((state) => ({ isSignInModalOpen: !state.isSignInModalOpen }));
  },

  isForgotPasswordModalOpen: false,
  toggleForgotPasswordModalOpen: () => {
    set((state) => ({ isForgotPasswordModalOpen: !state.isForgotPasswordModalOpen }));
  },

  isMemberModalOpen: false,
  toggleMemberModal: () => {
    set((state) => ({ isMemberModalOpen: !state.isMemberModalOpen }));
  },

  isVerificationModalOpen: false,
  toggleVerificationModal: () => {
    set((state) => ({ isVerificationModalOpen: !state.isVerificationModalOpen }));
  },

  isOtpModalOpen: false,
  toggleOtpModalOpen: () => {
    set((state) => ({ isOtpModalOpen: !state.isOtpModalOpen }));
  },


  isemailVerificationSuccessOpen: false,
  toggleIsemailVerificationSuccessOpen: () => {
    set((state) => ({ isemailVerificationSuccessOpen: !state.isemailVerificationSuccessOpen }));
  },


  isNavMenuOpen: false,
  toggleNavMenu: () => {
    set((state) => ({ isNavMenuOpen: !state.isNavMenuOpen }));
  },

  ispaymentModalOpen: false,
  toggleIspaymentModalOpen: () => {
    set((state) => ({ ispaymentModalOpen: !state.ispaymentModalOpen }));
  },

  isGoalModalOpen: false,
  toggleGoalModal: () => {
    set((state) => ({ isGoalModalOpen: !state.isGoalModalOpen }));
  },

  isGoalSuccessModalOpen: false,
  toggleGoalSuccessModal: () => {
    set((state) => ({ isGoalSuccessModalOpen: !state.isGoalSuccessModalOpen }));
  },

  // Goal Progress Modal State
  isGoalProgressModalOpen: false,
  toggleGoalProgressModal: () => {
    set((state) => ({ isGoalProgressModalOpen: !state.isGoalProgressModalOpen }));
  },
  openGoalProgressModal: () => {
    set({ isGoalProgressModalOpen: true });
  },
  closeGoalProgressModal: () => {
    set({ isGoalProgressModalOpen: false });
  },
}));


export const useOtpStore = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
}))

export const useSignUpEmailStore = create((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
  clearEmail: () => set({ email: null }),
}));


export const useProfileStore = create(
  persist(
    (set) => ({
      username: '',
      email: '',
      image: '',
      setCredentials: (username, email, image) => set({ username, email, image }),
      clearCredentials: () => set({ username: '', email: '', image: '' })
    }),
    {
      name: 'profile-storage',
    }
  )
);

export const useGoalStore = create((set) => ({
      targetLives: 0,
      period: '',
      setGoal: (targetLives, period) => set({ targetLives, period }),
      clearGoal: () => set({ targetLives: 0, period: '' })
    }),
);

export const usePaymentStore = create(
  persist(
    (set) => ({
      projectName: '',
      projectId: '',
      setPayment: (projectName, projectId) => set({ projectName, projectId }),
      clearPayment: () => set({ projectName: '', projectId: '' })
    }),
    {
      name: 'payment-storage',
    }
  )
);

export const useDonationStore = create(
  persist(
    (set) => ({
      userId: '',
      projectId: '',
      amount: '',
      currency: '',
      setDonation: (userId, projectId, amount, currency) => set({ userId, projectId, amount, currency }),
      clearDonation: () => set({ userId: '', projectId: '', amount: '', currency: '' })
    }),
    {
      name: 'donation-storage',
    }
  )
);

