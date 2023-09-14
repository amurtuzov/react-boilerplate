import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout/MainLayout.tsx'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout.tsx'
import ErrorPage from '@/views/ErrorPage/ErrorPage.tsx'
import HomePage from '@/views/HomePage/HomePage.tsx'

const routesConfig = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <div>Auth</div>,
      },
    ],
  },
]

const router = createBrowserRouter(routesConfig)

export { router }
