import React, { useState } from 'react';
import './AddParcel.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button as bootstarpButton, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import {
  Form, Input, SubmitButton, TextError, Toasts,
} from '../../components';
import { addParcelSchema, getBase64Image } from '../../utils';

function AddParcelPage({ addParcel }) {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [ImgErr, setImgErr] = useState('');
  const [isToast, setToast] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChangeImage = async (e) => {
    try {
      const file = await getBase64Image(e.target.files[0]);
      setImage(file);
      setImgErr('');
    } catch (error) {
      setImgErr(error.message);
    }
  };
  const onSubmit = async ({ name, phoneNumber, price }) => {
    try {
      setErrMessage('');
      const response = await axios.post('/api/v1/parcels/', {
        name,
        phoneNumber: `+970${phoneNumber}`,
        price,
        image,
      });
      const { id, status, name: parcelName } = response.data.data;

      addParcel({ id, status, name: parcelName });
      setToast(!isToast);
      setShow(!show);
    } catch (error) {
      if (error.response.status === 400) {
        setErrMessage(' لا يوجد زبون بهذا الرقم   ');
      } else {
        navigate('./error');
      }
    }
  };

  return (
    <div className="add-parcel">
      {isToast && <Toasts title="تم  بنجاح" body="تم اضافة الطرد بنجاح" color="#30d94d" />}
      <bootstarpButton className="btn btn-outline-primary" variant="primary" onClick={handleShow}>
        اضافة طرد
      </bootstarpButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة طرد</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              name: '', phoneNumber: '', price: '', image: '',
            }}
            validationSchema={addParcelSchema}
          >
            <Input name="name" type="text" placeholder="ادخل اسم الطرد" />
            <Input name="phoneNumber" type="text" placeholder="ادخل رقم هاتف الزبون" />
            <Input name="price" type="text" placeholder="ادخل سعر الطرد" />
            <label htmlFor="customFile" style={{ marginBottom: '5px' }}>اختر صورة الطرد</label>
            <input name="image" type="file" className="form-control" id="customFile" onChange={onChangeImage} />
            {ImgErr && <TextError>{ImgErr}</TextError>}
            <div className="d-flex justify-content-end "><SubmitButton title="تأكيد" /></div>
            {errMessage && <TextError>{errMessage}</TextError>}
          </Form>
        </Modal.Body>

      </Modal>
    </div>
  );
}
AddParcelPage.propTypes = {
  addParcel: PropTypes.func.isRequired,
};
export default AddParcelPage;
