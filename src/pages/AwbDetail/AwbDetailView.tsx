import './AwbDetailView.css';
import NarindoLogo from '../../assets/NARINDO.jpg';
import CourierLogo from '../../assets/SICEPAT.png';
import { useParams } from 'react-router-dom';
import UseAwbDetail from './UseAwbDetail';
import QRCode from 'react-qr-code';
import Barcode from 'react-barcode';

const AwbDetailView = () => {
  const { courier, awb } = useParams() as {
    courier: string;
    awb: string;
  };
  const { awbDetail } = UseAwbDetail({ courier, awb });

  console.log('View=>', courier, awb);
  return (
    <div className="awb-detail">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td colSpan={2}>
              <div className="awb-logo">
                <img src={NarindoLogo} draggable="false" height={90}></img>
                <img src={CourierLogo} draggable="false" height={100}></img>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Barcode value={awbDetail.awb_number} width={4.55} height={75} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-bold awb-service">
              Jenis Layanan: {awbDetail.service_code}
            </td>
          </tr>
          <tr>
            <td rowSpan={3} className="awb-qr-code">
              <QRCode value={awbDetail.order_id} size={110} />
            </td>
            <td>
              <div className="awb-parcel">
                <div>Asuransi</div>
                <div className="awb-parcel-list">
                  : {awbDetail.insurance_fee}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="awb-parcel">
                <div>Berat</div>
                <div className="awb-parcel-list">
                  : {awbDetail.weight_gr} gr
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="awb-parcel">
                <div>Quantity</div>
                <div className="awb-parcel-list">: {awbDetail.qty}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="awb-identity">
                <div className="awb-receiver">
                  <p className="text-bold">Penerima:</p>
                  <p>Nama: {awbDetail.shipper_name}</p>
                  <p>Alamat Lengkap: {awbDetail.shipper_address}</p>
                  <p>Nomor Telepon: {awbDetail.shipper_phone}</p>
                </div>
                <div className="awb-shipper">
                  <p className="text-bold">Pengirim:</p>
                  <p>Nama: {awbDetail.receiver_name}</p>
                  <p>Alamat Lengkap: {awbDetail.receiver_address}</p>
                  <p>Nomor Telepon: {awbDetail.receiver_phone}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="awb-note">
                <div className="text-bold">Catatan :</div>
                <div className="awb-info">{awbDetail.additional_info}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AwbDetailView;
