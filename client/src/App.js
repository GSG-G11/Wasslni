import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, SMS } from './pages';
import EditPassword from './pages/EditPassword/EditPassword';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* <Login /> */}
      <EditPassword />
    </>

  );
}

export default App;
