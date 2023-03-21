import React, {  useContext, useState } from 'react';
import './SignupScreen.css';
import Axios from 'axios';
import Girl from '../images/Girl.jpg';
// import { Store } from '../Store';
import {toast} from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
function SignupScreen() {
    const [name,SetName] = useState('');
    const [email,SetEmail]= useState('');
    const [password,SetPassword] = useState('');

    const navigate = useNavigate();
    const {state , dispatch : ctxDispatch} = useContext(Store);
    const {userInfo} = state;
    const submitHandler = async (e) =>{
       
            e.preventDefault();
            try {
                const { data } = await Axios.post('api/users/signup',{
                    name,
                    email,
                    password,
                });
                ctxDispatch({type: 'USER_SIGNIN', payload: data})
                localStorage.setItem('userInfo', JSON.stringify(data));
                navigate( '/signin');
               
            }
            catch(err) {
                toast.error(getError(err));
            }      
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
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        </div>
    );
}
export default SignupScreen;