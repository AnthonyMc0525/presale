import React from 'react';

import { Header } from './components/Header';
import { About } from './components/About';
import { Dist } from './components/Distribution';
import { Part } from './components/Participation';

function App() {
  return (
    <>
      <Header />
      <About />
      <Dist />
      <Part />
    </>
  );
}

export default App;
