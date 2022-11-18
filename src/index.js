import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Collection from './components/Collection/Collection';
import Home from './components/Home/Home';
import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: "/collection",
        element: <Collection/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
