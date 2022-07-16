import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepg from './Homepg';
import Reportpg from './Reportpg';
import Profilepg from './Profilepg';
import MakePayment from './MakePayment';

const App = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<Homepg />} />
      <Route path='/report' element={<Reportpg />} />
      <Route path='/profile' element={<Profilepg />} />
      <Route path='/payment' element={<MakePayment />} />
    </Routes>
  );
}

export default App;