import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Menu from "./components/Menu";
import Students from './pages/Students';
import SearchForm from './pages/SearchForm';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Dashboard from './pages/DashBoard'
import CreateUser from './pages/dashboard/CreateUser'
import ViewUser from './pages/dashboard/ViewUser'
import Setting from './pages/dashboard/Setting'
import Login from './pages/Login';
import Notfound from "./pages/Notfound";
function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contacts />} />
        <Route path='/students/:sid' element={<Students />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/form' element={<SearchForm />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='create' element={<CreateUser />} />
          <Route path='view-users' element={<ViewUser />} />
          <Route path='settings' element={<Setting />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
      footer
    </>
  )
}

export default App
