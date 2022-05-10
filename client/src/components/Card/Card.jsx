import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';
// card col-xl-4 col-md-10 m-2 shadow-sm
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
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
