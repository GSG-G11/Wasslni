import { PositionOptions } from 'mapbox-gl';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Offcanvas, Button } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';
import staticData from '../../utils/staticData/staticData';
import './SideBar.css';

function SideBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setUser } = useContext(UserContext);
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  const handleLogOut = async () => {
    const response = await axios.delete('/api/v1/auth/logout');
    setUser({});
    navigate('/login');
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    if (ScreenWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [ScreenWidth]);
  const currentPath = window.location.pathname;

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleShow}
        className={currentPath === '/profile' ? 'burger-menu-' : 'btn-light'}
        style={{
          backgroundColor: currentPath === '/profile' ? '#EBBA3D' : '#fff',
        }}
        type="button"
      >
        <i className="fas fa-bars" />
      </button>
      <Offcanvas show={!mobile ? true : show} onHide={handleClose} placement="end" scroll backdrop={mobile} style={{ maxWidth: '280px' }}>

        <Offcanvas.Header closeButton={mobile}>
          <Offcanvas.Title className="text-primary mb-4">وصلني</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {staticData.map((link) => (
              <NavLink
                onClick={() => (link.name === ' تسجيل الخروج' ? handleLogOut() : (mobile ? handleClose() : null))}
                to={link.path}
                className={link.className}
                aria-current="true"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />

    </div>
  );
}

export default SideBar;
