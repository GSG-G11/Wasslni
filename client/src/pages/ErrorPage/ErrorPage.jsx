import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFound from '../../assets/pageNotFound.png';
import { Title } from '../../components';
import './ErrorPage.css';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-page d-flex flex-column justify-content-center align-items-center w-100" style={{ height: '100vh' }}>
      <Title>هذه الصفحة غير متوفرة</Title>
      <button type="button" className="btn btn-outline-primary" style={{ margin: '30px 0 0 ' }} onClick={() => navigate(-1)}>عُد للخلف </button>
    </div>
  );
}
export default ErrorPage;
