import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UploadModal from './components/UploadModal';
import InvoicePreview from './components/InvoicePreview';
import PaymentDetailsForm from './components/PaymentDetailsForm';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <UploadModal />
          <InvoicePreview />
          <PaymentDetailsForm />
        </div>
      </div>
    </div>
  );
}

export default App;
