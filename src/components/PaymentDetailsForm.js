import React from 'react';
import './PaymentDetailsForm.css';

const PaymentDetailsForm = () => {
  return (
    <div className="payment-form">
      <h4>Payment Details</h4>

      <div className="form-group">
        <label>Status</label>
        <div className="radio-group">
          <label><input type="radio" name="status" /> Paid</label>
          <label><input type="radio" name="status" /> Unpaid</label>
        </div>
      </div>

      <div className="form-group"><label>Bill Number</label><input type="text" /></div>
      <div className="form-group"><label>Paid Amount</label><input type="text" /></div>
      <div className="form-group"><label>Paid Date</label><input type="date" /></div>
      <div className="form-group"><label>Due Date</label><input type="date" /></div>

      <div className="form-group">
        <label>Payment Mode</label>
        <select><option>Select</option></select>
      </div>

      <div className="form-group">
        <label>Currency</label>
        <select><option>Select</option></select>
      </div>

      <div className="form-group"><label>Bank Transaction Ref#</label><input type="text" /></div>
      <div className="form-group"><label>Total Amount</label><input type="text" /></div>
      <div className="form-group"><label>Tax Amount</label><input type="text" /></div>
      <div className="form-group"><label>Tax Percent (GST)</label><input type="text" /></div>
      <div className="form-group"><label>Tax Percent (ZAT)</label><input type="text" /></div>
      <div className="form-group"><label>FX Rate</label><input type="text" /></div>

      <div className="form-group">
        <label>Description</label>
        <div className="radio-group">
          <label><input type="radio" name="desc" /> Single</label>
          <label><input type="radio" name="desc" /> Multiple</label>
        </div>
        <input type="text" placeholder="Enter Description" />
      </div>

      <div className="form-buttons">
        <button className="save-btn">Save</button>
        <button className="publish-btn">Publish</button>
      </div>
    </div>
  );
};

export default PaymentDetailsForm;
