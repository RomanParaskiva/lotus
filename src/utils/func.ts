import axios from "axios";

export const getLotsFunc = async () => {
  const res = await axios.get("/api/getlots");

  if (res.status === 200) {
    return res.data.response;
  } else {
    return [];
  }
};

export const getUsersFunc = async () => {
  const res = await axios.get("/api/getusers");

  if (res.status === 200) {
    return res.data.response;
  } else {
    return [];
  }
};
