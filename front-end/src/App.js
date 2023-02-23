import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path='/signin' element={<SigninScreen></SigninScreen>}></Route>
          <Route path='/signup' element={<SignupScreen></SignupScreen>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
