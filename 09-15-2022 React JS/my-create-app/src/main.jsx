import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './componentes/Error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './componentes/Home.jsx'
import Produtos from './componentes/produtos.jsx'
import Exemplo1 from './componentes/Exemplo1.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children:[
      {path: '/', element: <Home />},
      {path: '/produtos', element: <Produtos />},
      {path: '/exemplo1', element: <Exemplo1 />},


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
