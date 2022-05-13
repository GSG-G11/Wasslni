import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  Card, Loader, Map, Property, Title, Toasts,
} from '../../components';
import UserContext from '../../context/userContext';
import './ParcelDetails.css';
import http from '../../services/http';

function ParcelDetails() {
  const { user: { isSeller } } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [route, setRoute] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isToast, setIsToast] = useState(false);
  const [message, setMessage] = useState('');
  const [taostBody, setTaostBody] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await http.delete(`/api/v1/parcels/${id}`);

      if (response.message === 'parcel deleted') {
        setTaostBody('تم حذف الطرد بنجاح');
        setIsToast(true);
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setMessage('لا يوجد طرد ');
      } else if (error.response.status === 400) {
        setMessage('  تم تسليم الطرد ');
      }
    }
  };
  const getDetails = async () => {
    try {
      const response = await http.get(`/api/v1/parcels/${id}`);
      if (response.message === 'parcels uploaded successfully') {
        setLoading(false);
        setData(response.data);
        setRoute(JSON.parse(response.data.coordinates));
      }
    } catch (error) {
      if (error.response.status === 404) {
        setMessage('لا يوجد طرد ');
        setLoading(false);
      }
    }
  };
  const handleStatus = async () => {
    try {
      const response = await http.put(`/api/v1/parcels/status/${id}`);

      if (response.message === 'status has changed') {
        setData({ ...data, status: true });
        setTaostBody('تم تغيير الحالة بنجاح');
        setIsToast(true);
      }
    } catch (error) {
      setMessage(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className=" pages-container ">
      {isToast ? <Toasts title="تم بنجاح" body={taostBody} color="#30d94d" /> : ''}
      <div className="d-flex justify-content-between align-items-center">

        <Title>تفاصيل الطرد</Title>
        {isSeller && !data.status && !message ? (
          <div className="d-flex justify-content">
            <button type="button" className="btn btn-outline-primary m-2" onClick={handleStatus}>تم التسليم</button>
            <button type="button" className="btn btn-outline-primary m-2" onClick={handleDelete}>حذف اللطرد </button>

          </div>
        )
          : ''}
      </div>
      {message ? <h1>{message}</h1> : ''}
      {loading ? <Loader /> : (
        <div className="d-flex flex-column justify-content-center ">
          <Card className="card col-md-8  m-2 shadow-sm">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-10">
                {isSeller ? <Property keyWord="الزبون" value={data.name} /> : ''}
                <Property keyWord="الحالة" value={data.status ? 'تم الاستلام ' : 'لم يتم الاستلام'} />
                <Property keyWord="رقم الزبون" value={data.phonenumber} />
                <Property keyWord="سعر الطرد بالشيكل" value={data.price} />
                <Property keyWord="تكاليف التوصيل بالشيكل " value={data.deliveryprice} />
                <Property keyWord="  زمن التوصيل بالدقيقة" value={Math.floor(Number(data.duration_mins))} />
              </div>
              <div className="col-lg-4 col-10 m-3 ">
                <img src={data.image} alt="" className="w-100" />
              </div>
            </div>
          </Card>

          <div className="col-md-8 m-2 " style={{ height: '250px', overflow: 'hidden', borderRadius: '7px' }}><Map data={route} /></div>
        </div>
      )}

    </div>
  );
}
export default ParcelDetails;
