
import React from 'react';

import Navbar from './Components/Navbar';
import ResponsiveCards from './Components/ResponsiveCards';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      
    <div className="container">
    <h1 className="my-4"></h1>
      <ResponsiveCards />
    </div>
    
    </div>
  );
};

export default App;
