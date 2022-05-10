import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Row, Col, Button, Toast,
} from 'react-bootstrap';
import './Toast.css';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toasts({ title, body, color }) {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <ToastContainer md={6} className="mb-2" position="top-center">
        <Toast show={showA} onClose={toggleShowA} className="m-2 ">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto w-100" style={{ color }}>{title}</strong>
          </Toast.Header>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Row>
  );
}
Toasts.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

};
export default Toasts;
