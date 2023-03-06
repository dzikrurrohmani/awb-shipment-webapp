import { useEffect, useState } from 'react';
import { useDependency } from '../../shared/hook/UseDependency';

interface Props {
  courier: string;
  awb: string;
}

const UseAwbDetail = ({ courier, awb }: Props) => {
  const { AwbServices }: any = useDependency();
  const [awbDetail, setAwbDetail] = useState({
    id: 0,
    courier_code: '',
    awb_number: '',
    order_id: '',
    invoice_no: '',
    service_group: '',
    service_code: '',
    current_status: null,
    weight_gr: 0,
    qty: 0,
    service_fee: 0,
    insurance_fee: 0,
    total_fee: 0,
    use_pickup: 0,
    pickup_time: '',
    shipper_name: '',
    shipper_phone: '',
    shipper_email: '',
    shipper_address: '',
    shipper_postalcode: '',
    receiver_name: '',
    receiver_phone: '',
    receiver_email: '',
    receiver_address: '',
    receiver_postalcode: '',
    additional_info: '',
    created_at: '',
    updated_at: '',
    deleted_at: null,
  });

  const onGetAwbDetail = async () => {
    try {
      const response = await AwbServices.getAwbDetail(courier, awb);
      console.log(response);
      setAwbDetail(response);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    console.log('Use=>', courier, awb);
    onGetAwbDetail();
  }, []);

  return {
    awbDetail,
  };
};

export default UseAwbDetail;
