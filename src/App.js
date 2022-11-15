import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([])

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then (res => res.json())
    .then(data => setUser(data))
  } ,[])

  return (
    <div className="App">
      <h3>Total User:{user.length}</h3>    
    </div>
  );
}

export default App;
