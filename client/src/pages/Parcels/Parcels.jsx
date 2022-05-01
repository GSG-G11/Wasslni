import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, TextError, Title } from '../../components';

function Parcels() {
  const [parcels, setParcels] = useState([]);
  // const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/parcels');
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Title>طرودي</Title>
      <div className="container-fluid">
        {parcels.map((parcel) => (<Card name={parcel.name} key={parcel.id} />))}
      </div>
      {/* {error && <TextError title={error} />} */}
    </div>
  );
}

export default Parcels;
