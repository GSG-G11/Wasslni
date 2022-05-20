import React from 'react';
import './Logo.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Logo() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/');
  };
  return <img src={logo} alt="logo" className="logo-img" onClick={handleSubmit} />;
}
export default Logo;
