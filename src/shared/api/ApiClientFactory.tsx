const apiClientFactory = (axiosClient:any) => {
  const doPost = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const doGet = async ({ url = '' }) => {
    try {
      const response = await axiosClient.get(url);
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

  const doDelete = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.delete(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { doPost, doGet, doPut, doDelete };
};

export default apiClientFactory