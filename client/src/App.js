import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Card } from './components';
import { Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
