import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />, 
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: "/products/:id",
                element: <ProductDetail />
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);