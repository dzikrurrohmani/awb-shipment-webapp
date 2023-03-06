import { AxiosInstance } from "axios";

const apiClientFactory = (axiosClient:AxiosInstance) => {
  const doPost = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doGet = async ({ url = '', params={} }) => {
    try {
      const response = await axiosClient.get(url,{params:params});
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doPut = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doDelete = async ({ url = ''}) => {
    try {
      const response = await axiosClient.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { doPost, doGet, doPut, doDelete };
};

export default apiClientFactory