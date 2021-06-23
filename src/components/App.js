import React from 'react';
import Header from './Header';
import ScheduleController from './ScheduleController';
import ProductController from './ProductController';


function App() {
  return (
    <React.Fragment>
      <Header />
      <ScheduleController />
      <ProductController />
    </React.Fragment>
  );
}

export default App;
