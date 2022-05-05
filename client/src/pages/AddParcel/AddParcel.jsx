import React, { useState } from 'react';
import './AddParcel.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button as bootstarpButton, Modal } from 'react-bootstrap';
import {
  Form, Input, SubmitButton, TextError,
} from '../../components';
import { addParcelSchema, getBase64Image } from '../../utils';

function AddParcelPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChangeImage = async (e) => {
    const file = await getBase64Image(e.target.files[0]);
    setImage(file);
  };
  const onSubmit = async ({ name, phoneNumber, price }) => {
    try {
      const response = await axios.post('/api/v1/parcels/', {
        name,
        phoneNumber: `+970${phoneNumber}`,
        price,
        image,
      });
    } catch (error) {
      if (error.response.status === 400) {
        setErrMessage(' لا يوجد زبون بهذا الرقم   ');
      } else {
        navigate('./error');
      }
    }
  };

  return (
    <>
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
            {errMessage && <TextError>{errMessage}</TextError>}
            <div className="d-flex justify-content-end "><SubmitButton title="تأكيد" /></div>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default AddParcelPage;
