import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, SMS } from './pages';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <SMS />
    </>

  );
}

export default App;
