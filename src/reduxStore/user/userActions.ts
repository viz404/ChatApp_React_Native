export const signinUserAction = (payload: any) => {
  return {
    type: "USER/SIGNIN",
    payload,
  };
};

export const signoutUserAction = () => {
  return {
    type: "USER/SIGNOUT",
  };
};

export const updateUserInfoAction = (payload: any) => {
  return {
    type: "USER/UPDATE_INFO",
    payload,
  };
};
