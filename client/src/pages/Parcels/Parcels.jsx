import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import AddParcelPage from '../AddParcel/AddParcel';

import {
  Card, Loader, Title,
} from '../../components';
import UserContext from '../../context/userContext';
import './Parcels.css';

function Parcels() {
  const [loading, setLoading] = useState(true);
  const [parcels, setParcels] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
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
      <div className={user.isSeller ? 'parcels-header' : null}>
        {user.isSeller && <AddParcelPage parcels={parcels} setParcels={setParcels} />}
        <Title>طرودي</Title>
      </div>
      {loading ? <Loader /> : (
        <div className="mt-4  cards-container">

          {parcels.map((parcel) => (<Card className="card col-xl-4 col-md-10 m-2 shadow-sm" status={parcel.status} name={parcel.name} key={parcel.id} id={parcel.id} />))}
          {!parcels && <div>{error}</div>}
        </div>
      )}
    </div>
  );
}

export default Parcels;
