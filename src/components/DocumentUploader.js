import React from 'react';

const DocumentUploader = () => {
 return (
 <div className="upload-container">
 <h4>Receipts</h4>
 <input type="file" />
 <button>Add Receipt</button>
 <p>Send over email to: <b>abc+docs@gmail.com</b></p>
 </div>
 );
};

export default DocumentUploader;