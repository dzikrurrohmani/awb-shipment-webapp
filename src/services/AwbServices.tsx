interface Props {
  doPost: any;
  doGet: any;
}

const AwbService = ({ doPost, doGet }: Props) => {
  const getAwbAll = async (
    courier_code: string,
    page = 1,
    itemPerPage = 15
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
    getAwbAll,
    getAwbDetail,
  };
};

export default AwbService;
