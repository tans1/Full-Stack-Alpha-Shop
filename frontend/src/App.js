import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import PaymentOptionPage from './pages/payment';
import Authentication from './pages/authentication';
import DeliveryAddressPage from './pages/DeliveryAddress';

import React from "react"
import Cursor from './components/common/cursor';

function App() {
  
  return (
    <div className="App">
      <Cursor />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Home />} />
          <Route path='/products' element = { <ProductsPage />} />
          <Route path='/cart' element = { <CartPage />} />
          <Route path='/payment' element = { <PaymentOptionPage />} />
          <Route path='/auth' element = { <Authentication />} />
          <Route path='/delivery' element = { <DeliveryAddressPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
