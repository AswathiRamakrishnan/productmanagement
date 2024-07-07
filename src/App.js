import logo from './logo.svg';
import './App.css';
import NavBar from './components_1/navbar';
import Addproduct from './components_1/addproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components_1/home';
import Products from './components_1/products';
import Hero from './components_1/hero';

function App() {
  return (
    <>

    <NavBar />
    <BrowserRouter>

<Routes> 
  
<Route path="/" element={<></>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/addproduct" element={<Addproduct/>}></Route>
    </Routes>
</BrowserRouter>
</>

  );
}

export default App;
