import Home from './home';
import Location from './location';
import Portfolio from './portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/location", element: <Location/>},
    { path: "/portfolio", element: <Portfolio/>},

  ]);

  return <RouterProvider router={router} />
}

export default App
