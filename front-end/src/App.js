import { useContext } from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import SigninScreen from './screens/SigninScreen';
import {Store} from './Store';
import SignupScreen from './screens/SignupScreen';
import PaymentScreen from './screens/PaymentScreen';
function App() {
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { cart, userInfo } = state;
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path='/signin' element={<SigninScreen></SigninScreen>} ></Route>
          <Route path='/signup' element={<SignupScreen></SignupScreen>}></Route>
          <Route path='/dashboard' element={<PaymentScreen></PaymentScreen>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
