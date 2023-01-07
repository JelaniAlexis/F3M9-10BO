import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import CollectionPage from './components/CollectionPage/CollectionPage';
import StandardCollection from './data/collection/StandardCollection';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: "/collection",
        element: <CollectionPage collection={StandardCollection}/>
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
