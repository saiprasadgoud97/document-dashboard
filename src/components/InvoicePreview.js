import React from 'react';
import './InvoicePreview.css';

const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="invoice-list">
        <h4>Bills</h4>
        <ul>
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i}>
              <div>Bill {i + 1}</div>
              <span>Sep {i + 1}, 2024</span>
              <span>$120.9</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="invoice-doc">
        <img
          src="https://via.placeholder.com/300x400.png?text=Invoice+Preview"
          alt="Invoice"
        />
      </div>
    </div>
  );
};

export default InvoicePreview;
