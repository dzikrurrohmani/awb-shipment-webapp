import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDependency } from '../../shared/hook/UseDependency';

const UseAwbList = () => {
  const navigate = useNavigate();
  const { AwbServices }: any = useDependency();
  const [page, setPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(13);
  const [courier, setCourier] = useState('SICEPAT');
  const [awbList, setAwbList] = useState<{ awb_number: string, service_code: string, order_id: string }[]>([]);

  const onGetAwbList = async () => {
    try {
      const response = await AwbServices.getAwbList(courier, page, itemPerPage);
      console.log(response);
      setAwbList(response);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    onGetAwbList();
    console.log(page);
    
  }, [page]);

  const onPrintAwb = (awb: string) => {
    navigate(`/detail/${courier}/${awb}`);
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  const onPrevPage = () => {
    setPage(page - 1);
  };

  return {
    page,
    awbList,
    itemPerPage,
    onPrintAwb,
    onNextPage,
    onPrevPage
  };
};

export default UseAwbList;
