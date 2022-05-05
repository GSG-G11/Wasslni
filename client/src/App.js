import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home, SMS, Profile, Login,
} from './pages';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* <SMS /> */}
      <Profile />
      {/* <Login /> */}
    </>

  );
}

export default App;
