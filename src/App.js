import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, []);

return (
  <div className="App"> 
    <h1>Datos de Backend</h1>
    <ul>
      {data.map((item, index) => (
        <div key={index}>
          <li>{item.my_name}</li>
          <li>{item.my_surname}</li>
          <li>{item.my_phone}</li>
          <li>{item.my_email}</li>
          <li>{item.my_git}</li>
          <li>{item.my_linkedin}</li>
          
        </div>
      ))}
    </ul>
  </div>
)
}
export default App;
