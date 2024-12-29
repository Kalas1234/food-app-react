import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About'; // Import About component
import Contact from './Components/Contact'; // Import Contact component
import RestaurantMenu from './Components/RestaurantMenu';
import "../app.css";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './Components/Error';

const Grocery = lazy(()=> import('./Components/grocery'))  // lazy is a function provided by react package in that function we pass a callback function which consisit the path of the component for which we need to do lazy loading.
console.log('check5',Grocery)

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
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },

        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


