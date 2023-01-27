import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import CollectionPage from './pages/collection/CollectionPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Root from './pages/Root';


import './index.scss';
import Backlog from './pages/backlog/Backlog';
import Logout from './pages/logout/Logout';

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
                path: 'login',
                element: <Login/>
            },
            {
                path: "collection/:userId",
                element: <CollectionPage/>
            },
            {
                path: 'backlog/:userId',
                element: <Backlog/>
            },
        ]
    },
    {
        path: '/logout',
        element: <Logout/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
