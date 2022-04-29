import React, { useEffect, useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import staticData from '../../utils/staticData/staticData';

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
      <Button onClick={handleShow} className="burger-menu btn-light m-3">
        <i className="fas fa-bars" />
      </Button>
      <Offcanvas show={!mobile ? true : show} onHide={handleClose} placement="end" scroll backdrop={mobile} style={{ maxWidth: '280px' }}>

        <Offcanvas.Header closeButton={mobile}>
          <Offcanvas.Title className="text-primary mb-4">وصلني</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {staticData.map((link) => (
              <Link
                onClick={() => (mobile ? handleClose() : null)}
                to={link.path}
                className={link.className}
                aria-current="true"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
