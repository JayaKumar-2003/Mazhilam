import  Axios  from 'axios';
import react from 'react';
import { useState,useContext } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';

export default function AddList() {
    const [name,Setname] = useState('');
    const [number,Setnumber] = useState('');
    const [address,Setaddress] = useState('');
    const [pending,Setpending] = useState('');
    const [description,Setdescritpion] = useState('');
    const [amount,Setamount] = useState('');


    const {state , dispatch : ctxDispatch} = useContext(Store);
    const {details} = state;
    const SubmitHandler = async (e)=> {
        e.preventDefault();
        try {
            const {data} = await Axios.post('/api/details/addlist',{
                name,
                number,
                address,
                pending,
                description,
                amount,
            });
            ctxDispatch({type: 'DETAILS', payload: data})
            localStorage.setItem('details', JSON.stringify(data));

        }catch(e) {
            toast.error(getError(e));
        }
        
    };
    return (
        <div className='AddList'>
            <div>
                <form onSubmit={SubmitHandler}>
                    <input type="text" placeholder='name' onChange={(e)=> {Setname(e.target.value)}}></input>
                    <input type="number" placeholder='number' onChange={(e)=>{Setnumber(e.target.value)}}></input>
                    <input type="text" placeholder='address' onChange={(e)=>{Setaddress(e.target.value)}}></input>
                    <input type="text" placeholder='pending' onChange={(e)=>{Setpending(e.target.value)}}></input>
                    <input type="text" placeholder='descritpion' onChange={(e)=>{Setdescritpion(e.target.value)}}></input>
                    <input type="number" placeholder='Amount' onChange={(e)=>{Setamount(e.target.value)}}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    );
};