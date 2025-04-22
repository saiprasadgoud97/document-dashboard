import React from 'react';
import './UploadModal.css';

const UploadModal = () => {
  return (
    <div className="upload-modal">
      <div className="tabs">
        <span className="active">Receipts</span>
        <span>Bank</span>
      </div>
      <div className="upload-section">
        <label>Select Client</label>
        <select>
          <option>Select</option>
        </select>
        <div className="upload-box">
          <p>📁 Drag & Drop or Choose file to upload</p>
          <p className="file-types">JPEG, PNG, PDF, CSV</p>
        </div>
        <button className="upload-btn">Add Receipt</button>
      </div>
    </div>
  );
};

export default UploadModal;
