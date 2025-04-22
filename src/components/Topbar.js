import React from 'react';

const Topbar = () => {
 return (
 <div className="topbar">
 <select>
 <option>Google</option>
 <option>Outlook</option>
 </select>
 <button>Export to Excel</button>
 <button>Add Document</button>
 </div>
 );
};

export default Topbar;