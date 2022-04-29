import React from 'react';
import './Logo.css';
import logo from '../../../assets/logo.png';

function Logo() {
  return (
    <img src={logo} alt="logo" className="logo-img" />
  );
}
export default Logo;
