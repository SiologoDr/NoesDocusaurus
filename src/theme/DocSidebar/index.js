import React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import './customSidebar.css';

export default function DocSidebar(props) {
  return (
    <div className="custom-sidebar-container">
      <OriginalDocSidebar {...props} />
    </div>
  );
}
