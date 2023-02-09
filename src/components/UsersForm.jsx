import React, { Children, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';



const UsersForm = ({ getUsers, userSelected, deselectUser }) => {


    const initialValues = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else {
            reset(initialValues)
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            // actualizando user
            axios
                .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers();
                    deselectUser();
                })
                .catch(error => console.log(error.response?.data));
        } else {
            // creando user
            axios
                .post('https://users-crud.academlo.tech/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response?.data));

        }
        clear();
    }

    const clear = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
        deselectUser();
    }


    return (
        <form className='container' onSubmit={handleSubmit(submit)}>

            <h1>New User</h1>
            <b className='return-portafolio'><a href="https://lindapereafullstack.netlify.app/#/proyects">Regresar a Portafolio</a></b>
            <div className='align-name'>
                <div className='input-container'>
                    <i class="fa-solid fa-user"></i>
                    <label htmlFor="first_name"></label>
                    <input
                        type="text"
                        placeholder='   First Name'
                        id='firs-name' {...register("first_name")}
                    />

                    <label htmlFor="last_name"></label>
                    <input
                        type="text"
                        placeholder='   Last Name'
                        id='last_name' {...register("last_name")}
                    />
                </div>
                <div className='input-container'>
                    <i class="fa-solid fa-envelope"></i>
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        placeholder='email'
                        id='email' {...register("email")}
                    />
                </div>
                <div className='input-container'>
                    <i class="fa-solid fa-lock"></i>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder='password'
                        id='password' {...register("password")}
                    />
                </div>
            </div>
            <div className='input-container'>
                <i class="fa-solid fa-cake-candles"></i>
                <label htmlFor="birthday"></label>
                <input type="date" placeholder=' mm/dd/yyyy'
                    id='birthday' {...register("birthday")}
                />
            </div>
            
            <div className='container-buttons-list'>
                <button  className='buttons-list'>
                    Upload
                </button>
                <button className='buttons-list' type='button' onClick={clear}  >
                    Clear
                </button>

            </div>
        </form>
    );
};

export default UsersForm;