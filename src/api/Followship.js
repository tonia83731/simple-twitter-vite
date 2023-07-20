import axios from "axios";

const baseURL = "https://twitter-azx79115.herokuapp.com/api";

const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: "Bearer " + token,
  },
});


export const followOther = async (userId) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/followships`, {
      id: userId,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const unfollowOther = async (userId) => {
  try {
    const res = await axiosInstance.delete(`${baseURL}/followships/${userId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};