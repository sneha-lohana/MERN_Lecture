import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

const Contact = React.lazy(() => import('./pages/Contact'));

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
                element: (
                    <React.Suspense>
                        <Contact />
                    </React.Suspense>
                ) 
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: "/products/:id",
                element: <ProductDetail />
            },
            {
                path: '*',
                element: (<>
                <h1>Page Not Found</h1></>)
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);