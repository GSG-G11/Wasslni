import React, { useEffect, useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import staticData from '../../utils/staticData/staticData';
import './SideBar.css';

function SideBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

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

  return (
    <>

      <Button onClick={handleShow} className="btn-light" style={{ padding: '0px', width: 'auto' }}>
        <i className="fas fa-bars" />
      </Button>
      <Offcanvas show={!mobile ? true : show} onHide={handleClose} placement="end" scroll backdrop={mobile} style={{ maxWidth: '280px' }}>

        <Offcanvas.Header closeButton={mobile}>
          <Offcanvas.Title className="text-primary mb-4">وصلني</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {staticData.map((link) => (
              <NavLink
                onClick={() => (mobile ? handleClose() : null)}
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

    </>
  );
}

export default SideBar;
