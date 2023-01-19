import Axios from "axios";

// import { ElMessage } from 'element-plus';
import { usePersistStore } from "@/stores/persistStore";

const baseURL = "";

const axios = Axios.create({
  baseURL,
  timeout: 30000
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (config) => {
    //注意useDataStore必须放在这个位置，见官方文档：https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
    const persistStore = usePersistStore();
    //获取并设置baseUrl
    if (persistStore.baseUrl) {
      config.baseURL = persistStore.baseUrl;
    }
    //获取并设置token
    if (persistStore.token) {
      config.headers.common["Authorization"] = `Bearer ${persistStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    // if (response.data&&!response.data.success) {
    //   console.log(response.data);
    //   ElMessage.error(response.data.message);
    // }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      // ElMessage({
      //   message: `Code: ${code}, Message: ${msg}`,
      //   grouping: true,
      //   type: "error",
      // });
      alert(`Code: ${code}, Message: ${msg}`);
      // console.error(`[Axios Error]`, error.response);
    } else {
      // ElMessage({
      //   message: error,
      //   grouping: true,
      //   type: "error",
      // });
      alert(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
