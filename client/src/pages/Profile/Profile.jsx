import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Map from '../../components/Map/Map';

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
    <div>

      <div className="header" />
      <div className="pagestt-container">
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
