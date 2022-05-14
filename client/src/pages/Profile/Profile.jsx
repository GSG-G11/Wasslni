import React, { useEffect, useState } from 'react';
import './Profile.css';
import Map from '../../components/Map/Map';
import http from '../../services/http';

function Profile() {
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const response = await http.get('/api/v1/profile');

    if (response.message === 'success') {
      setUser(response.data[0]);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>

      <div className="header" />
      <div className="page-container">
        <div className="userInfo">
          <div className="userInfo-right">
            <img src={user.image} alt="profile" />
          </div>
          <div className="userInfo-left">
            <p>
              الإسم :
              {user.name}
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
        <h4 className="text-primary m-4">موقعي</h4>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Profile;
