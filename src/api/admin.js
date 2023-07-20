import axios from "axios";

const baseURL = "http://twitter.ap-northeast-1.elasticbeanstalk.com";
const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseUrl: `${baseURL}`,
  headers: {
    Authorization: "bearer " + token,
  },
});

// 後台登入 //post
export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseURL}/admin/login`, {
      account,
      password,
    });

    const { token } = data;
    if (token) {
      console.log(data.message);
      return { success: true, ...data };
    }
    // console.log(data.message)
    return data;
  } catch (error) {
    console.error("[Admin Login Failed]:", error);
  }
};

// 後台取得指定使用者資料 //get
export const getAllUserData = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/admin/users`);
    return { success: true, data };
  } catch (error) {
    // console.error('[Get user info failed]:', error)
    return {
      success: false,
      message: `[Get user info failed]:${error}`,
    };
  }
};

// 後台取得所有貼文資料
export const getAllTweetsData = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/admin/tweets`);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: `[Get user info failed]:${error}`,
    };
  }
};

// 刪除指定貼文 //delete
export const deleteTwi = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseURL}/admin/tweets/${id}`);
    // return {success: true, data}
    return res.data;
  } catch (error) {
    console.error(`[Delete twi failed]: ${error}`);
  }
};
