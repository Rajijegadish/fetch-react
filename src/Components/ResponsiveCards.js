import React, { useEffect, useState } from 'react';
import './ResponsiveCards.css'; // Import your CSS file for styling

const ResponsiveCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 12))); // Limiting to the first 12 items for this example
  }, []);

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.url} alt={item.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">TITLE:<span style={{color:"green"}}>{item.title}</span></h5>
            <p className="card-text">URL:<span style={{color:"blue"}}> {item.url}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveCards;
