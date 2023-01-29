import Cookies from "js-cookie";

export const setAuthToken = (token: string) => {
  Cookies.set("auth", token, {
    path: "/",
    expires: 30,
  });
};

export const getAuthToken = () => {
  return Cookies.get("auth");
};
