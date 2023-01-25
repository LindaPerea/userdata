import axios from 'axios';
import React from 'react';


const UsersList = ({ users, selectUser, getUsers }) => {

    const deleteUser = (id) => {
        axios.delete(`https://users-crud.academlo.tech/users/${id}/`)
            .then(res => {
                getUsers()
                console.log(res);
                
            });
    }
  
    return (
        <ul className='container-left' >
            <ul>
                {
                    users.map(user => (
                        <li className='box-user' key={user.id} >
                            <div box-user-list>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <div>{user.email}</div>
                                <div>{user.birthday}</div>
                            </div>
                            <div className='box-user-button'>
                                <button onClick={() => deleteUser(user.id)} ><i class="fa-solid fa-trash-arrow-up"></i></button>
                                <button onClick={() => selectUser(user)}><i class="fa-solid fa-pencil"></i></button>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </ul>
    );
};

export default UsersList;