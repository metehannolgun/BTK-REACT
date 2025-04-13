import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses, { coursesLoader } from './pages/Courses'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import Helplayout from './pages/help/Helplayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/courses',
    element: <Courses />,
    loader: coursesLoader, // Courses için loader fonksiyonu
  },
  {
    path: '/help',
    element: <Helplayout />,
    children: [
      { path: 'faq', element: <Faq /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes