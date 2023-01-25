import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Modals from './components/Modals';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUSerSelected] = useState(null)

  useEffect(() => {
    // axios.get('https://users-crud1.herokuapp.com/users/')
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsers(res.data));
  }

  const selectUser = (user) => {
    setUSerSelected(user)
  }

  const deselectUser = () => setUSerSelected(null);

  
  // console.log(userSelected);

  return (
    <div className="App">
      <Modals />

      <UsersList
        users={users}
        selectUser={selectUser}
        getUsers={getUsers}
      />

      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
    </div>
  )
}

export default App
