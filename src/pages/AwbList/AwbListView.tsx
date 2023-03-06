import './AwbListView.css';
import UseAwbList from './UseAwbList';

import React from 'react';

const AwbListView = () => {
  const { page, awbList, itemPerPage, onPrintAwb, onNextPage, onPrevPage } =
    UseAwbList();
  return (
    <div className="awb-list">
      <div className="app-heading">AWB List</div>
      <div className="table-responsive">
        <div className="text-center">
          <table className="table table-striped border-start border-end">
            <thead className="table-group-divider">
              <tr>
                <th>Nomor AWB</th>
                <th>Service</th>
                <th>Order ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {awbList.map((trx) => {
                return (
                  <tr key={trx.awb_number}>
                    <td>{trx.awb_number}</td>
                    <td>{trx.awb_number}</td>
                    <td>{trx.awb_number}</td>
                    <td>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => onPrintAwb(trx.awb_number)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {false && (
              <tbody className="table-group-divider">
                <tr>
                  <td className="fw-bold text-center p-3">
                    {`Ticket with number or title "${'searchTicket'}" is not found`}
                  </td>
                </tr>
              </tbody>
            )}
            <tbody>
              <tr className="table-group-divider" />
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          {page !== 1 && (
            <li
              className="page-item"
              onClick={() => {
                onPrevPage();
              }}
            >
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          )}
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
          {awbList.length >= itemPerPage && (
            <li
              className="page-item"
              onClick={() => {
                onNextPage();
              }}
            >
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AwbListView;
