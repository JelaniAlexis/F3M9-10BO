import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import CollectionPage from './pages/Collection/CollectionPage';
import { Collections } from './common/datasets';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Root from './pages/Root';


import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "collection/:userId",
                element: <CollectionPage collection={Collections[0]}/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
