import { create } from 'zustand';

// 用zustand定义全局状态和状态管理函数

type UserInfo = {
  userId: String;
  name: string;
  email: string;
  count: number;
};

type GlobalState = {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo) => void;
  updateUserInfo: (partial: Partial<UserInfo>) => void;
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
};

export const useGlobalStates = create<GlobalState>((set) => ({
  userInfo: null,
  isLoggedIn: false,
  setUserInfo: (info) => set(() => ({ userInfo: info })),
  updateUserInfo: (partial) =>
    set((state) => ({
      userInfo: state.userInfo ? { ...state.userInfo, ...partial } : null,
    })),
  setLoggedIn: (status) => set(() => ({ isLoggedIn: status })),
}));
