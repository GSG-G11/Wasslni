import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({
  name, status, id, children,
}) {
  return (
    <div className="card col-md-4 m-2 shadow-sm" style={{ borderRight: '7px solid #f0c13f' }}>
      {
      name
        ? (
          <div className=" card-body ">
            <h5 className="card-title">{name}</h5>
            {status ? <p className="card-text"> الحالة  : تم الاستلام</p> : <p className="card-text"> الحالة  : لم يتم الاستلام</p> }
            <Link to={`/parcels/${id}`} className="btn btn-outline-secondary btn-sm">تفاصيل الطرد</Link>
          </div>
        ) : children
    }
    </div>
  );
}
export default Card;
Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
