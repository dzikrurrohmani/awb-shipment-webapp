interface Props {
  doPost: any;
  doGet: any;
}

const AwbServices = ({ doPost, doGet }: Props) => {
  const getAwbList = async (
    courier_code: string,
    page: number,
    itemPerPage: number
  ) => {
    try {
      return await doPost({
        url: `/v1/awb/all`,
        data: {
          courier_code: courier_code,
          page: page,
          itemPerPage: itemPerPage,
        },
      });
    } catch (e) {
      throw e;
    }
  };

  const getAwbDetail = async (courier_code: string, awb = '007559670028') => {
    try {
      return await doPost({
        url: `/v1/awb/detail`,
        data: {
          courier_code: courier_code,
          awb: awb,
        },
      });
    } catch (e) {
      throw e;
    }
  };
  return {
    getAwbList,
    getAwbDetail,
  };
};

export default AwbServices;
