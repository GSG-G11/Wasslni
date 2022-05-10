import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/v1/profile');
      setUser(response.data.data[0]);
    };
    fetchUser();
  }, []);
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-primary">الملف الشخصي</h1>
      </div>
      <div className="userInfo">
        <div className="userInfo-right">
          <img src={user.image} alt="profile" />
        </div>
        <div className="userInfo-left">
          <p>
            الإسم :
            {user.name ? 'منذر' : null}
          </p>
          <p>
            الصلاحيات :
            {user.isSeller ? ' تاجر ' : 'بائع'}
          </p>
          <p>
            رقم الجوال :
            {user.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
