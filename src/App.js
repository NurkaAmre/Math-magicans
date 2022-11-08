import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Home from './component/Home';
import Quotes from './component/Quotes';
import Header from './component/header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>
    ;
  </>
);

export default App;
