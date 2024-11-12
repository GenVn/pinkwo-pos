import { create } from "zustand";
import { persist } from "zustand/middleware";
import pb from "@/lib/utils";

interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  avatar?: string;
}

interface UserState {
  users: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  getBalance: () => Promise<any>;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      users: null,
      setUser: (user) => set({ users: user }),
      clearUser: () => set({ users: null }),
      getBalance: async () => {
        const balance = await pb
          .collection("wallets")
          .getOne(pb.authStore.model?.id);
        return balance;
      },
      logout: () => {
        pb.authStore.clear();
        set({ users: null });
      },
    }),
    {
      name: "user-storage",
    }
  )
);
