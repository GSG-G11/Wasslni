import React, { useContext } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button, Logo } from '../../components';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Logo />
      <div className="content">
        <p className="btn-shine">موقع مختص لتوصيل الطرود لكافة محافظات قطاع غزة , بطريقة آمنة ووقت قياسي</p>
        <Button onClick={() => navigate('./verify')}>ابدأ</Button>
      </div>
    </div>
  );
}
export default Home;
