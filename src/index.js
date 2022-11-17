import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-hrqbu28onjixrjwt.us.auth0.com
// AnnOR8JjfNc8Yr6CwVnAO2iBKi35CN1J
const domainKey = `${process.env.REAT_APP_AUTH_DOMAIN}`;
const clientIdKey = `${process.env.REAT_APP_AUTH_CLIENT_ID}`;

ReactDOM.render(
    <Auth0Provider
        domain='dev-hrqbu28onjixrjwt.us.auth0.com'
        clientId='AnnOR8JjfNc8Yr6CwVnAO2iBKi35CN1J'
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
