import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';

import { useNavigate, useLocation } from 'react-router-dom';
import UserContext from './userContext';
import { getUserInfo } from '../utils';

function UserProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    phoneNumber: '',
    image: '',
    lat: 0.0,
    lng: 0.0,
    isSeller: false,
    isLoggedIn: false,
    id: 0,
  });
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser({
        username: userInfo.userName,
        phoneNumber: userInfo.phoneNumber,
        image: userInfo.urlImg,
        lat: userInfo.lat,
        lng: userInfo.lng,
        isSeller: userInfo.role,
        isLoggedIn: true,
        id: userInfo.id,
      });
      if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/' || location.pathname === '/verify')navigate('/parcels');
    }
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserProvider;
