// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header';
import Home from './Home';
import Course from './Course';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bloging from './Bloging.jsx';
import FullBlog from './FullBlog.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

const allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'course',
    element: <Course />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'blog',
    element: <Bloging/>,
  },
  {
    path: 'blog/:id',
    element: <FullBlog/>,
  },
  {
    path: '*',
    element: <h1>Page Not Found Babu</h1>,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}>
    </RouterProvider>
  </React.StrictMode>
);
