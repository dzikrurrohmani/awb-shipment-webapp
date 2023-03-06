import { useParams } from 'react-router-dom';
import UseAwbDetail from './UseAwbDetail';

const AwbDetailView = () => {
  const { courier, awb } = useParams() as {
    courier: string;
    awb: string;
  };
  const { awbDetail } = UseAwbDetail({ courier, awb });

  console.log('View=>', courier, awb);
  return (
    <div style={{ width: '500px' }}>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td colSpan={2}>{awbDetail.courier_code}</td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                fontWeight: 'bold',
              }}
            >
              {awbDetail.awb_number}
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                fontWeight: 'bold',
              }}
            >
              Jenis Layanan: {awbDetail.service_code}
            </td>
          </tr>
          <tr>
            <td rowSpan={3} style={{ verticalAlign: 'middle' }}>
              {awbDetail.order_id}
            </td>
            <td
              style={{
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                paddingLeft: '20px',
              }}
            >
              <div>Asuransi</div>
              <div
                style={{ width: '150px', textAlign: 'left' }}
              >
                : {awbDetail.insurance_fee}
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                paddingLeft: '20px',
              }}
            >
              <div>Berat</div>
              <div
                style={{ width: '150px', textAlign: 'left' }}
              >
                : {awbDetail.weight_gr} gr
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                paddingLeft: '20px',
              }}
            >
              <div>Quantity</div>
              <div
                style={{ width: '150px', textAlign: 'left' }}
              >
                : {awbDetail.qty}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div
                style={{ display: ' flex', justifyContent: 'space-between' }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>Penerima:</p>
                  <p>Nama:</p>
                  <p>Alamat Lengkap:</p>
                  <p>Nomor Telepon:</p>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>Pengirim:</p>
                  <p>Nama:</p>
                  <p>Alamat Lengkap:</p>
                  <p>Nomor Telepon:</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div
                style={{
                  fontSize: '13px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Catatan :</div>
                <div style={{ alignSelf: 'center', height: '100px' }}>
                  {awbDetail.additional_info}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AwbDetailView;
