import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({
  name, status, id, children, className,
}) {
  return (
    <div className={className} style={{ borderRight: '5px solid #ca011a' }}>
      {
      name
        ? (
          <div className=" card-body ">
            <h5 className="card-title">{name}</h5>
            {status ? <p className="card-text"> الحالة  : تم الاستلام</p> : <p className="card-text"> الحالة  : لم يتم الاستلام</p> }
            <Link to={`/parcels/${id}`} className="btn btn-outline-primary btn-sm m-0">تفاصيل الطرد</Link>
          </div>
        ) : children
    }
    </div>
  );
}
export default Card;
Card.propTypes = {
  name: PropTypes.string,
  status: PropTypes.bool,
  id: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};
