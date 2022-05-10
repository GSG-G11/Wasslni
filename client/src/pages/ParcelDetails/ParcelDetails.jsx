import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {
  Card, Loader, Map, Property, Title, Toasts,
} from '../../components';
import UserContext from '../../context/userContext';
import './ParcelDetails.css';

function ParcelDetails() {
  const { user: { isSeller } } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [route, setRoute] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isToast, setToast] = useState(false);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const getDetails = async () => {
    try {
      const response = await axios.get(`/api/v1/parcels/${id}`);
      setLoading(false);
      setData(response.data.data);
      setRoute(JSON.parse(response.data.data.coordinates));
    } catch (error) {
      if (error.response.status === 404) {
        setMessage('لا يوجد طرد ');
        setLoading(false);
      }
    }
  };
  const handleStatus = async () => {
    try {
      const response = await axios.put(`/api/v1/parcels/status/${id}`);
      setData({ ...data, status: true });
      setToast(!isToast);
    } catch (error) {
      setMessage(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className=" pages-container ">
      {isToast ? <Toasts title="تم بنجاح" body="تم تغيير الحالة " color="#30d94d" /> : ''}
      <div className="d-flex justify-content-between align-items-center">

        <Title>تفاصيل الطرد</Title>
        {isSeller && !data.status && !message ? <button type="button" className="btn btn-outline-primary" style={{ marginLeft: '30px' }} onClick={handleStatus}>تم التسليم</button>
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
