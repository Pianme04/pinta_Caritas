import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './layout/Layout'
import EditarCliente from './pages/EditarCliente'

import Inicio from './pages/Inicio'

import NuevoCliente from './pages/NuevoCliente'
import VerCliente from './pages/verCliente'







function App() {

    console.log(import.meta.env.VITE_URL_API)

  return (
    <BrowserRouter>

      <Routes>


        <Route path='/clientes' element={<Layout/>}> 
          <Route index element={<Inicio/>}/>o
          <Route path='nuevo' element={<NuevoCliente/>}/>
          <Route path='editar/:id' element={<EditarCliente/>}/>
          <Route path=':id' element={<VerCliente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
