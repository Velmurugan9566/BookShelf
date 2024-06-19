//import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Booksearch from './Booksearch.jsx'
import Myshelf from './Myshelf.jsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Booksearch/>} ></Route>
       <Route path='/Personal-Shelf' element={<Myshelf/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
