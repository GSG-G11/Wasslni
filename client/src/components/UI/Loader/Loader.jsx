import React from 'react';
import './Loader.css';
import { Spinner } from 'react-bootstrap';
// import '../../../scss/custom.scss';

function Loader() {
  return (

    <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />

  );
}
export default Loader;
