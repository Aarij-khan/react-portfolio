import { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Location from './location';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/location", element: <Location/>},

  ]);

  return <RouterProvider router={router} />
}

export default App
