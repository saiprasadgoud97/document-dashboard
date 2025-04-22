import React from 'react';

const PaymentDetailsForm = () => {
 return (
 <div className="form-container">
 <h4>Payment Details</h4>
 <form>
 <label>Paid <input type="radio" name="paid" /> Unpaid <input type="radio" name="paid" /></label>
 <input placeholder="Paid Amount" />
 <input placeholder="Currency" />
 <button>Save</button>
 </form>
 </div>
 );
};

export default PaymentDetailsForm;