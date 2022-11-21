import { lazy } from 'react';

const Home = lazy(() => import('./HomePage'));
const Products = lazy(() => import('./ProductsPage'));
const SingleProduct = lazy(() => import('./SingleProductPage'));
const About = lazy(() => import('./AboutPage'));
const Cart = lazy(() => import('./CartPage'));
const Error = lazy(() => import('./ErrorPage'));
const CheckoutPage = lazy(() => import('./CheckoutPage'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));


export {
    Home,
    Products,
    SingleProduct,
    About,
    Cart,
    Error,
    CheckoutPage,
    PrivateRoute,
    AuthWrapper,
};