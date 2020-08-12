import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Userlist from './UserList'


function App() {
  const [listOfUSer, setListOfUSer] = useState('')

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setListOfUSer(res.data)
      })
      .catch(err => console.log(err))
  }, [setListOfUSer])


  return (
    <div className="App">
      <Userlist users={listOfUSer ? listOfUSer : null} />
    </div>
  );
}

export default App;
