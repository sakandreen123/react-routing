import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Notfound from "./pages/Notfound";
import Menu from "./components/Menu";
import Students from './pages/Students';
import SearchForm from './pages/SearchForm';
import SearchResults from './pages/SearchResults';
function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contacts />} />
        <Route path='/students/:sid' element={<Students />} />
        <Route path='/form' element={<SearchForm />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      footer
    </>
  )
}

export default App
