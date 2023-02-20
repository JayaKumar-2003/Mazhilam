import React, { useState } from 'react';
import './SignupScreen.css';
import Axios from 'axios';
import Girl from '../images/Girl.jpg';

function SignupScreen() {
    const [name,SetName] = useState('');
    const [email,SetEmail]= useState('');
    const [password,SetPassword] = useState('');

    const submitHandler = async (e) =>{
            const { data } = await Axios.post('/users/signup',{
                name,
                email,
                password,
            });
            
    };
    return(
        <div>
            {/*---image side--- */}
            <div className='corner-left'>
                <img src={Girl} alt='not found'></img>
            </div>
               {/*---form side--- */}
            <div className='corner-right'>
                <form className ='form-style'onSubmit={submitHandler}>
                    <label>Name</label><br></br>
                    <input type='text' id='name' className='input' onChange={(e) => SetName(e.target.value)}></input>
                    <br></br>
                    <label>Email</label><br></br>
                    <input type='text' id='name' className='input' onChange={(e) => SetEmail(e.target.value)}></input>
                    <br></br>
                    <label>Password</label><br></br>
                    <input type='password' id='name' className='input' onChange={(e) =>SetPassword(e.target.value)}></input>
                    <br></br>
                    <input type='button'value='Signin'className='input'></input>
                </form>
            </div>
        </div>
    );
}
export default SignupScreen;