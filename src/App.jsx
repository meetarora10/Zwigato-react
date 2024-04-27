// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom'
import Cards from './components/Cards'
import CardDetails from './components/CardDetails';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/order' element={<Cards />}></Route>
        <Route path='/details/:id' element={<CardDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
