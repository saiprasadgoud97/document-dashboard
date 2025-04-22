import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DocumentUploader from '../components/DocumentUploader';
import InvoiceViewer from '../components/InvoiceViewer';
import PaymentDetailsForm from '../components/PaymentDetailsForm'

const Dashboard = () => {
 return (
 <div className="dashboard-container">
 <Sidebar />
 <div className="main-content">
 <Topbar />
 <div className="dashboard-body">
 <DocumentUploader />
 <InvoiceViewer />
 <PaymentDetailsForm />
 </div>
 </div>
 </div>
 );
};

export default Dashboard;