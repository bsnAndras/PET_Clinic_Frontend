import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import UserHome from './components/UserHome'
import AdminHome from './components/AdminHome'
import NavBar from './components/NavBar'
import DecideNavBar from './components/DecideNavBar'
import AddPetForm from './components/AddPetForm'
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DecideNavBar>  {/* this component decides based on the location whether the navBar (child) should be loaded or not */}
        <NavBar />
      </DecideNavBar>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/user/home" element={<UserHome />} />
        <Route exact path="/user/pet/add" element={<AddPetForm />} />
        <Route exact path="/admin/home" element={<AdminHome />} />
      </Routes>
      <ToastContainer>
      </ToastContainer>
    </Router>
  </React.StrictMode>,
)