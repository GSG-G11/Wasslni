import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Card, TextError, Title, Loader,
} from '../../components';

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
      } catch (err) {
        setError(err.response.data.error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Title>طرودي</Title>
      {loading ? <Loader /> : (
        <div className="container-fluid">
          {parcels.map((parcel) => (<Card name={parcel.name} key={parcel.id} />))}
          {error && <TextError title={error} />}
        </div>
      )}
    </div>
  );
}

export default Parcels;
