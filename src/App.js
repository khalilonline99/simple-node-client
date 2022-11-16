import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }
    // submit korar por name and email ta user object e ashbe, tarpor seta amra fetch korbo POST method e.

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(user)
    }) // post kore seta body te set hobe. req.body theke amra seta pabo
    .then(res => res.json())
    .then(data => {
      const newUsers = [...users, data]
      setUsers(newUsers) //ekhon jei data submit korlam seta ager datar sathe array te jabe
      console.log('eta koi dekhacche', data) //client er console log e dekhabe.

    })
    .catch(err => console.error(err))
    event.target.reset();

  }
  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' /> <br />
        <input type="email" name="email" /> <br />
        <button type="submit">Add User</button>
      </form>

      <h3>Total User:{users.length}</h3>
      {
        users.map(user => <p key={user._id} >Name: {user.name} {<br></br>} Email: {user.email} </p>)
      }
    </div>
  );
}

export default App;
