import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import { Layout } from './pages/Layout'
import { Projects } from './pages/Projects'
import { Home } from './pages/Home'
import { Contact } from './pages/Contacts'
import { AbaoutMe } from './pages/AboutMe'


export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: "/", element: <Home />},
      ]
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: "/projetos", element: <Projects />},
      ]
    }, {
      path: '/',
      element: <Layout />,
      children: [
        {path: "/sobre-mim", element: <AbaoutMe />},
      ]
    }, {
      path: '/',
      element: <Layout />,
      children: [
        {path: "/contatos", element: <Contact />},
      ]
    }
   
])

  return (<RouterProvider router={router} /> 
  )
}