import React, { useEffect, useState } from 'react';
import './PaymentScreen.css';
import {useNavigate} from 'react-router-dom';
// import dashboard from '../images/dashboard.jpg';
function PaymentScreen() {
    const [data,SetData] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:5000/api/details",{
            method:"GET",
        }).then((res) => res.json())
        .then((data)=> {
            console.log(data);
            SetData(data);
        });
    },[])
    const [toggle,Settoggle] = useState(false);
    const [history,Sethistory] = useState(false);
    const navigate = useNavigate();
    return(
        <div className='body'>
            {toggle && <div className='right-container'>
                <div className='brand-right'>
                    <label className='text'>ADMIN</label>
                </div>
                <div className='right-down'>
                    <div className='dashboard'>
                        {/* <img src={dashboard} alt='re-load' className='icon'></img> */}
                        <label className='text'>Dashboard</label>
                    </div>
                   <div className='payment' onClick={(e)=> {navigate("/addlist")}}>
                        <label className='text'>Add List</label>
                   </div>
                </div>
            </div>}
            <div className='left-container'>
                <div className='nav-top'>
               <span onClick={(e)=>{Settoggle(!toggle)}}>html</span>
                <label>Mazhilam Store System</label>
                </div>
                <div className='content'>

                </div>
            </div>
            <div className='content'>
                <div className='box'>
                <div className='add'>
                    {/* <span>Add</span> */}
                </div>
            </div>
            <div className='details'>
                    <table className='table'>
                        {data.map(i=>{
                            return (
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.number}</td>
                                    <td>{i.Pending}</td>
                                    <td><button onClick={(e)=>{Sethistory(!history)}}></button></td>
                                   {history && <div className='history'>
                                    <td>{i.History.Amount}</td>
                                    <td>{i.History.Description}</td>
                                   </div> }
                                </tr>
                            )
                        })}
                    </table>
            </div>
            </div>
        </div>
    );
}

export default PaymentScreen;