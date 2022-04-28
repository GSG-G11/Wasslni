import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Card } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card name="حقيبة" id={2} status={false} />} />
    </Routes>

  );
}

export default App;
