import React from 'react';

function Select() {
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option value="true">بائع</option>
        <option value="false">مشتري</option>
      </select>
    </div>
  );
}

export default Select;
