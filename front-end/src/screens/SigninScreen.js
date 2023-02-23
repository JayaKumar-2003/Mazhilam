import { Axios } from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Girl from '../images/Girl.jpg';
import { getError } from '../utils';
import './SigninScreen.css';
export default function SigninScreen() {
    const [name,SetName]=useState('');
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const SubmitHandler = async(e) => {
        console.log('clciked');
        e.preventDefault();
        try {
            const {data} = await  Axios.post('/api/users/signin',{
                name,
                email,
                password,
            },
            );
            console.log(data);
        }
        catch(err) {
            toast.error(getError(err));
        }
    };
    return (
        <div className='Signin'>
           <div className='body'>
            <img className='image' src={Girl} alt='Reload Page'></img>
            <h2 className='brand'>MAZHILAM</h2>
           </div>
           <div className='form'>
            <form className='form-inside'onSubmit={SubmitHandler}>
                <div className='one'>
                <label>Name</label>
                <input type='text' onChange={(e)=>{SetName(e.target.value)}}></input>
                </div>
                <div className='one'>
                <label>Email Address</label>
                <input type='text' onChange={(e)=>{SetEmail(e.target.value)}}></input>
                </div>
                <div className='one'>
                <label>Password</label>
                <input type='text' onChange={(e)=>{SetPassword(e.target.value)}}></input>
                </div>
                <input type='submit' value='submit'></input>
            </form>
           </div>
        </div>
    );
};