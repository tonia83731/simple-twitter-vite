import axios from "axios";

const baseURL = "https://twitter-azx79115.herokuapp.com/api";

const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: "Bearer " + token,
  },
});

// 取得指定貼文的所有留言 //get
export const getTwiReply = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/tweets/${id}/replies`)
    return res.data
  } catch (error) {
    console.error('[Get twi reply failed]:', error)
  }
}

export const creatNewTwi = async (description) => {
  // const {description} = payload
  try {
    const res = await axiosInstance.post(`${baseURL}/tweets`, {
      description
    })
    return res.data
  } catch (error) {
    console.error('[Create new twi failed]:', error)
  }
}

// 回復指定貼文
export const replyTwi = async (tweet_id, comment) => {

  try {
    const res = await axiosInstance.post(`${baseURL}/tweets/${tweet_id}/replies`, {
      comment
    });
    return res.data;
  } catch (error) {
    console.error('[Reply twi failed]: ', error);
  }
};

// 喜歡指定貼文
export const likeTweet = async (tweetId) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/like`)
    return res.data
  } catch (error) {
    console.error('[Like tweet failed]:', error)
  }
}

// 取消喜歡指定貼文
export const unlikeTweet = async (tweetId) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/unlike`)
    return res
  } catch (error) {
    console.error('[Unlike tweet failed]:', error)
  }
}

// 取得指定貼文資料
export const getSingleTwi = async (tweetId) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/tweets/${tweetId}`)
    return res.data
  } catch (error) {
    console.log('[Get single twi failed]:', error)
  }
}

// 取得指定貼文回復資料
export const getSingleTwiReply = async (tweetId) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/tweets/${tweetId}/replies`)
    return res.data
  } catch (error) {
    console.error('[Get single twi reply failed]:', error)
  }
}
