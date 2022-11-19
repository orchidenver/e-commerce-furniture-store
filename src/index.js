import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-hrqbu28onjixrjwt.us.auth0.com
// AnnOR8JjfNc8Yr6CwVnAO2iBKi35CN1J

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
        redirectUri={window.location.origin}
        cacheLocation='localstorage'>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
    ,
    document.getElementById('root'));
