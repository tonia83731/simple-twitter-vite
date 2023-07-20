import axios from "axios";

const baseURL = "http://twitter.ap-northeast-1.elasticbeanstalk.com";

// 使用者登入驗證
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users/login`, {
      account,
      password,
    });
    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

// 註冊新使用者資料
export const register = async ({
  account,
  name,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    const { newUser } = data;
    if (newUser) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error("[Register Failed]:", error);
  }
};
