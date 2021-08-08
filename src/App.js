import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import Userslist from './components/Users/UsersList';
import './index.css';


function App() {
  const [userslist, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}]
    })
  }
  return (
    <div>
    <AddUser onAddUser={addUserHandler} />
    <Userslist users={userslist} />
    </div>
  );
}

export default App;
