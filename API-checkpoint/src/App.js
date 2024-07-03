import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import UserList from './UserList'


function App (){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data)
      })
      
  }, []);


  return (
    <div>
      {
        users.map((user)=> <UserList user={user}/>)
      }
    </div>
  )
}

export default App
