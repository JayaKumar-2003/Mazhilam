// import { useContext } from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import SigninScreen from './screens/SigninScreen';
// import {Store} from './Store';
import SignupScreen from './screens/SignupScreen';
import PaymentScreen from './screens/PaymentScreen';
import AddList from './Components/AddList';
function App() {
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { cart, userInfo } = state;
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path='/' element={<SigninScreen></SigninScreen>} ></Route>
          <Route path='/signup' element={<SignupScreen></SignupScreen>}></Route>
          <Route path='/dashboard' element={<PaymentScreen></PaymentScreen>}></Route>
          <Route path='/addlist' element={<AddList></AddList>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
