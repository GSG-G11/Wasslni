import React from 'react';
import './Home.css';
import { Button, Logo } from '../../components';

function Home() {
  return (
    <div className="home-page">
      <Logo />
      <div className="content">
        <p className="btn-shine">موقع مختص لتوصيل الطرود لكافة محافظات قطاع غزة , بطريقة آمنة ووقت قياسي</p>
        <Button>ابدأ</Button>
      </div>
    </div>
  );
}
export default Home;
