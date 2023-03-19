import React, { useState } from 'react';
import './PaymentScreen.css';
// import dashboard from '../images/dashboard.jpg';
function PaymentScreen() {
    const [toggle,Settoggle] = useState(false);
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
                   <div className='payment'>
                        <label className='text'>Payment</label>
                   </div>
                </div>
            </div>}
            <div className='left-container'>
                <div className='nav-top'>
                <span className='icon' onClick={(e)=>{Settoggle(!toggle)}}>fgdfg</span>
                <label>Mazhilam Store System</label>
                </div>
                <div className='content'>

                </div>
            </div>
        </div>
    );
}

export default PaymentScreen;