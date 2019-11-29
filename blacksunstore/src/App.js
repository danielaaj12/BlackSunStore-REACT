import React, { useState } from 'react';
import './App.css';

import { CartProvider } from './context'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import About from './pages/products';
import Cart from './pages/cart';

function App() {
  const [cart, setCart] = useState([])

  return (
    <CartProvider value={[cart, setCart]}>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={HomePage} exact />
          <Route path={"/about"} component={About} />
          <Route path={"/cart"} component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
