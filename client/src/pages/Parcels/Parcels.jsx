import axios from 'axios';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { AddParcelPage } from '..';
import {
  Card, Loader, TextError, Title,
} from '../../components';
import './Parcels.css';

function Parcels() {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/parcels');
        setParcels(response.data.data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError('لا يوجد طرود حاليا');
      }
    };
    fetchData();
  }, []);
  return (
    <div className="pages-container ">
      <div className="parcels-header">
        <AddParcelPage />
        <Title>طرودي</Title>
      </div>
      {loading ? <Loader /> : (
        <div className="mt-4  cards-container">
          {parcels.map((parcel) => (<Card name={parcel.name} key={parcel.id} />))}
          <div>{error}</div>
        </div>
      )}
    </div>
  );
}

export default Parcels;
