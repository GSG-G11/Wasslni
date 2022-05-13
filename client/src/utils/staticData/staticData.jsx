import React from 'react';

const staticData = [
  {
    name: 'طرودي',
    path: '/parcels',
    className: 'list-group-item list-group-item-action py-2 ripple mb-4 border-0 border-bottom border-dark',
    key: 1,
    icon: <i className="fa-solid fa-box" />,
  },
  {
    name: 'الملف الشخصي',
    path: '/profile',
    className: 'list-group-item list-group-item-action py-2 ripple mb-4 border-0 border-bottom border-dark',
    key: 2,
    icon: <i className="fas fa-user" />,
  },
  {
    name: 'تعديل الملف الشخصي',
    path: '/editProfile',
    className: 'list-group-item list-group-item-action py-2 ripple mb-4 border-0 border-bottom border-dark',
    key: 3,
    icon: <i className="fas fa-edit" />,
  },
  {

    name: ' تسجيل الخروج',
    path: '/logout',
    className: 'list-group-item list-group-item-action py-2 ripple mb-4 border-0 border-bottom border-dark',
    key: 4,
    icon: <i className="fa-solid fa-right-from-bracket" />,
  },
];

export default staticData;
