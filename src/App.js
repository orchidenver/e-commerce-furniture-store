import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import {
  Home,
  SingleProduct,
  Cart,
  CheckoutPage,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import Fallback from './components/Fallback';


function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route path='checkout' element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            } />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </AuthWrapper>
    </Suspense>

  );
}

export default App;
