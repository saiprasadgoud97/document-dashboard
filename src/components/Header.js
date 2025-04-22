import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <select>
          <option>Google</option>
        </select>
        <button>Export to Excel</button>
        <button>Add Document</button>
        <button>Connect</button>
      </div>
      <div className="quickbook">
        <span>Quickbook</span>
        <span className="sync-status">Auto-sync ✅</span>
      </div>
    </div>
  );
};

export default Header;
