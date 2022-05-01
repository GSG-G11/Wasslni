import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home, Login, Parcels, SMS,
} from './pages';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* <SMS /> */}
      <Parcels />
      {/* <Login /> */}
    </>

  );
}

export default App;
