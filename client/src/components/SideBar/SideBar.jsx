import React from 'react';
import './SideBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SideBar() {
  const links = [
    {
      name: 'طرودي',
      path: '/parcels',
    },
    {
      name: 'الملف الشخصي',
      path: '/profile',
    },
  ];
  return (
    <div className="aside">
      <ul>
        {links.map((link) => (
          <a href={link.path}>
            <li>{link.name}</li>
            <span><i className="bi bi-arrow-left-short" /></span>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
