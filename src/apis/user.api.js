import axios from "@/composables/axios";

export const login = async (loginInfo) => {
  const res = await axios.get("login");
  return res.data;
};
