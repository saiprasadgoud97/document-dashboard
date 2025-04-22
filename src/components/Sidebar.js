import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">📂</div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Accounting</li>
          <li>Banking</li>
          <li>Reports</li>
          <li>Contacts</li>
          <li>Invoicing</li>
          <li>Queries</li>
          <li>Help</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
