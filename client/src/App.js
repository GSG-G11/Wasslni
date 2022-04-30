import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Select from './components/UI/Select/Select';
// eslint-disable-next-line import/named
import { Home, Signup } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      {/* <SMS /> */}

    </>

  );
}

export default App;
