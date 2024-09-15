import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Home from './assets/routes/Home/index.tsx'
import Cadastro from './assets/routes/Cadastro/index.tsx'
import CadastroVeiculo from './assets/routes/CadastroVeiculo.tsx/index.tsx'
import Chat from './assets/routes/Chat/index.tsx'
import Login from './assets/routes/Login/index.tsx'
import Orcamento from './assets/routes/OrcamentoOficina/index.tsx'
import OrcamentoPeca from './assets/routes/OrcamentoPeca/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EsqueceuSenha from './assets/routes/EsqueceuSenha/index.tsx'

//paginas

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/cadastroveiculo",
        element: <CadastroVeiculo/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/chat",
        element: <Chat/>
      },
      {
        path: "/orcamento",
        element: <Orcamento/>
      },
      {
        path: "/orcamentopeca",
        element: <OrcamentoPeca/>
      },
      {
        path: "/EsqueceuSenha",
        element: <EsqueceuSenha/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
