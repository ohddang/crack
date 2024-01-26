import { create } from "zustand";

interface userInfoType {
  nickname: string;
  ouid: string;
}

interface UserInfoState {
  userInfo: userInfoType;
}

interface UserInfoActions {
  setUserInfo: (userinfo: userInfoType) => void;
}

const defaultState = { nickname: "", ouid: "" };

const useStore = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: userInfoType) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState });
  },
}));

export default useStore;
