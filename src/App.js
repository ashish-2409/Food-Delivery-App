import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Cardprovider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <Cardprovider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/myorder' element={<MyOrder />}></Route>
          </Routes>
        </div>
      </Router>
    </Cardprovider>
  );
}

export default App;
