import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './components/homepage/Home';
import CardDetails from './components/CardDetails';
import TimeLine from './components/timeline/TimeLine';
import ErrorPage from './components/ErrorPage';
import Stats from './components/stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },

      {
        path: "/cardDetails/:id",
        element: <CardDetails />,
        loader: () => fetch("/friendsData.json"),
      },
      {
        path: "/stats",
        element: <Stats />
      }

    ],
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
