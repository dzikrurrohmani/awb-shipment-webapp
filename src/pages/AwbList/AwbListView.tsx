import './AwbListView.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAwbList from './UseAwbList';

import React from 'react';

const AwbListView = () => {
  const navigate = useNavigate();
  const { page, awbList, onPrintAwb } = UseAwbList();
  return (
    <div style={{ margin: '0px 35px', fontFamily: 'Poppins-Regular' }}>
      <div className="app-heading">AWB List</div>
      <div className="table-responsive">
        <div className="text-center" style={{ minWidth: '880px' }}>
          <table className="table table-striped border-start border-end">
            <thead
              className="table-group-divider"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
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
            <li className="page-item" onClick={() => {}}>
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
          {awbList.length >= 10 && (
            <li className="page-item" onClick={() => {}}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" style={{ color: '#6c757d' }}>
                  &raquo;
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AwbListView;
