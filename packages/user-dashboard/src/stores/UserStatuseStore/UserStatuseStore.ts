import { userApi, QlClientLoginProps, QlClientRegisterProps } from "api/UserApi";
import { createMap, getValue } from "nanostores";
import { useStore } from "nanostores/preact";
import { UserStatus } from "./_types";
import { notificationStore } from "stores/NotificationStore";
import { onResponse } from "api/QLBaseApi";
import { route } from "preact-router";
import { useRouterStore } from "stores/RouterStore";

export type UserStatuseLoginProps = QlClientLoginProps;
export type UserStatuseRegisterProps = QlClientRegisterProps;

export type UserStatuseUserProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  personalInfo: any;
};

const EMPTY_USER: UserStatuseUserProps = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  personalInfo: {},
};

interface UserStatuseStore {
  userStatus: UserStatus;
  isLogined: boolean;
  isUnlogined: boolean;
  isRegistrationComplite: boolean;
  user: UserStatuseUserProps;
}

const createUserStatuseStore = () => {
  const store = createMap<UserStatuseStore>(() => {
    store.set({
      userStatus: UserStatus.INIT_PROFILE_STATUS,
      isLogined: false,
      isUnlogined: false,
      isRegistrationComplite: false,
      user: EMPTY_USER,
    });
    heartbeatAction();

    return onResponse(({ status, url }) => {
      if (status === 401) {
        setUserStatus(UserStatus.UNLOGINED_PROFILE_STATUS);
      }
    });
  });

  const setUser = (user: any) => {
    store.setKey("user", {
      lastName: user.lastName || "",
      firstName: user.firstName || "",
      phone: user.phone || "",
      email: user.email || "",
      personalInfo: user.personalInfo || {},
    });
    store.setKey("isRegistrationComplite", !!user.lastName && !!user.firstName && !!user.phone);
  };

  const setUserStatus = (userStatus: UserStatus) => {
    store.setKey("userStatus", userStatus);
    store.setKey("isLogined", userStatus === UserStatus.LOGINED_PROFILE_STATUS);
    store.setKey("isUnlogined", userStatus === UserStatus.UNLOGINED_PROFILE_STATUS);
    if (userStatus != UserStatus.UNLOGINED_PROFILE_STATUS) {
      setUser(EMPTY_USER);
    }
  };

  const putUserAction = async (data: UserStatuseUserProps): Promise<boolean> => {
    const { isOk, error } = await userApi.putUser(data);
    if (isOk) {
      notificationStore.addSuccessAction("Profile successful update");
      setUser(data);
      return true;
    } else {
      notificationStore.addErrorAction(error);
    }
    return false;
  };

  const heartbeatAction = async (): Promise<boolean> => {
    const { isOk, body } = await userApi.getUser();
    if (isOk) {
      setUserStatus(UserStatus.LOGINED_PROFILE_STATUS);
      const user = body || EMPTY_USER;
      setUser(user);
      return true;
    }
    return getValue(store).isLogined;
  };

  const loginAction = async (data: UserStatuseLoginProps): Promise<boolean> => {
    const { isOk, error } = await userApi.login(data);
    if (isOk) {
      setUserStatus(UserStatus.LOGINED_PROFILE_STATUS);
      notificationStore.addSuccessAction("Login successful");
      return true;
    } else {
      notificationStore.addErrorAction(error);
    }
    return false;
  };

  const registerAction = async (data: UserStatuseRegisterProps): Promise<boolean> => {
    const { isOk, error } = await userApi.register(data);
    if (isOk) {
      notificationStore.addSuccessAction("Register successful");
      return true;
    } else {
      notificationStore.addErrorAction(error);
    }
    return false;
  };

  const logoutAction = async (): Promise<boolean> => {
    const { isOk, status, error } = await userApi.logout();
    if (isOk) {
      notificationStore.addSuccessAction("Logout successful");
      setUserStatus(UserStatus.UNLOGINED_PROFILE_STATUS);
      return true;
    } else {
      notificationStore.addErrorAction(error);
    }
    if (status === 401) {
      setUserStatus(UserStatus.UNLOGINED_PROFILE_STATUS);
      return true;
    }
    return getValue(store).isUnlogined;
  };

  return {
    store,
    heartbeatAction,
    logoutAction,
    loginAction,
    putUserAction,
    registerAction,
  };
};

export const userStatuseStore = createUserStatuseStore();

export const useUserStatuseStore = () => {
  const state = useStore(userStatuseStore.store);
  return { ...userStatuseStore, ...state };
};
