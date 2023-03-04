import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from './components/layout/Layout';
import Home from './Pages/home/Home';

import './assets/scss/styles.scss'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <h1>about</h1>,
        },
      ],
    },
  ]);

  return (
    <Layout>
      <RouterProvider
        router={router}
        fallbackElement={<h1>loading..</h1>}
      />
    </Layout>

  );
}

export default App;
