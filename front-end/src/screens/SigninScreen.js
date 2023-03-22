import  Axios  from 'axios';
import { useNavigate}from 'react-router-dom';
import React,{ useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Girl from '../images/Girl.jpg';
import { getError } from '../utils';
import './SigninScreen.css';
import {Store} from '../Store';
export default function SigninScreen() {

    
    const navigate = useNavigate();
    // const {search} = useLocation();
    // const redirectInUrl = new URLSearchParams(search).get('redirect');
    // const redirect = redirectInUrl ? redirectInUrl : '/';


    const [name,SetName]=useState('');
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const {state , dispatch : ctxDispatch} = useContext(Store);
    console.log(state);
    const {userinfo} = state;
    const SubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await Axios.post('/api/users/signin',{
                name,
                email,
                password,
            });
            ctxDispatch({type: 'USER_SIGNIN', payload: data})
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate( '/dashboard');
        }
        catch(err) {
            toast.error(getError(err));
        }
    };
    // useEffect(()=> {
    //     if(userinfo) {
    //         navigate();
    //     }
    // },[navigate,redirect,userinfo]);
    return (
        <div className='Signin'>
            <div className='body'>
            <img className='image' src={Girl} alt='Reload Page'></img>
            </div>
            <div className='brand-div'>
            <h2 className='brand'>MAZHILAM</h2>
           </div>
            <div className='form'>
            <form className='form-inside' onSubmit={SubmitHandler}>
                <div className='one'>
                <label>Name</label>
                <input type='text' onChange={(e)=>{SetName(e.target.value)}}></input>
                </div>
                <div className='one'>
                <label>Email Address</label>
                <input type='email' onChange={(e)=>{SetEmail(e.target.value)}}></input>
                </div>
                <div className='one'>
                <label>Password</label>
                <input type='password' onChange={(e)=>{SetPassword(e.target.value)}}></input>
                </div>
                <input type='submit' value='submit'></input>
            </form>
           </div>
        </div> 
    );
};