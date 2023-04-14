import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'


import Footer from './components/footer/Footer';
import Product from './pages/Product';
import { Cards } from './components';

function App() {
  return (
    <>    
     <Navbar/>
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/product' element={<Cards/>} />
        <Route path='/product/:id' element={<Product/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;