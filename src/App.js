import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About'; // Import About component
import Contact from './Components/Contact'; // Import Contact component
import RestaurantMenu from './Components/RestaurantMenu';
import "../app.css";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './Components/Error';

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children : [
            {
               path: "/",
               element: <Body />

            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            },

        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


