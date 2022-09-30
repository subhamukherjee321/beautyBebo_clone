import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Slider } from "./components/Slider"
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Makeup from './components/Makeup';
import Cart from './components/Cart';
import { Route,Routes } from 'react-router-dom';
import Hair from './components/Hair';
import Personalcare from './components/Personalcare';
import Skin from './components/Skin';
import Fragrance from './components/Fragnance';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { PrivateComponent } from './components/PrivateCompenent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/makeup' element={ <Makeup/>}></Route>
        <Route path='/hair' element={ <Hair/>}></Route>
        <Route path='/personalcare' element={ <Personalcare/>}></Route>
        <Route path='/skin' element={<Skin/>}></Route>
        <Route path='/fragrance' element={<Fragrance/>}></Route>
        

        <Route path='/cart' element={<PrivateComponent><Cart/></PrivateComponent>}> </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/payment' element={<Payment/>}> </Route>
        <Route path='/cart/checkout' element={<Checkout/>}></Route>
        {/* <Route path='/signup' element={<SugarSignUp/>}></Route>
        
        <Route path='/payment' element={<PaymentOption/>}></Route> */}
      </Routes>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
