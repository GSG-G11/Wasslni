import React, { useEffect, useState, useContext } from 'react';
import AddParcelPage from '../AddParcel/AddParcel';

import { Card, Loader, Title } from '../../components';
import UserContext from '../../context/userContext';
import './Parcels.css';
import http from '../../services/http';

function Parcels() {
  const [loading, setLoading] = useState(true);
  const [parcels, setParcels] = useState([]);
  const [filteredParcels, setFilteredParcels] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const handleFilter = async (e) => {
    const { value } = e.target;
    if (value === 'deliverd') {
      setFilteredParcels(parcels.filter((parcel) => parcel.status === true));
    } else if (value === 'notDeliverd') {
      setFilteredParcels(parcels.filter((parcel) => parcel.status === false));
    } else {
      setFilteredParcels(parcels);
    }
  };
  const fetchParcels = async () => {
    try {
      const response = await http.get('/api/v1/parcels');
      if (response.message === 'parcels uploaded') {
        setParcels(response.data);
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      setLoading(false);
      setError('لا يوجد طرود حاليا');
    }
  };
  useEffect(() => {
    fetchParcels();
  }, []);
  useEffect(() => {
    setFilteredParcels(parcels);
  }, [parcels]);

  return (
    <div className="pages-container ">
      <div className={user.isSeller ? 'parcels-header' : null}>
        {user.isSeller && (
          <AddParcelPage parcels={parcels} setParcels={setParcels} />
        )}
        <Title>طرودي</Title>
      </div>
      <select
        name="status"
        className="form-select"
        aria-label="Default select example"
        onChange={handleFilter}
        style={{
          width: '150px',
          margin: ' 20px 10px 0 0',
        }}
      >
        <option value="all" label="الكل  ">
          الكل
        </option>
        <option value="deliverd" label="تم التسليم">
          تم التسليم
        </option>
        <option value="notDeliverd" label="لم يتم التسليم">
          لم يتم التسليم
        </option>
      </select>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4  cards-container">
          {filteredParcels.length
            ? filteredParcels.map((parcel) => (
              <Card
                className="card col-xl-4 col-md-10 m-2 shadow-sm"
                status={parcel.status}
                name={parcel.name}
                key={parcel.id}
                id={parcel.id}
              />
            ))
            : 'لا يوجد طرود حاليا'}
        </div>
      )}
    </div>
  );
}

export default Parcels;
