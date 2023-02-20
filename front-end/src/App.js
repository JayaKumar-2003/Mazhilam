import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import SigninScreen from './screens/SignupScreen';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path='/Signup' element={<SigninScreen></SigninScreen>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
