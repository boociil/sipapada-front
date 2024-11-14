import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Login from './components/Login.jsx'
import Form from './components/Form.jsx'
import AdminPage from "./components/AdminPage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>
            <Header type="fixed"/>
            <Main />
            <Footer />
          </>
        }></Route>
        <Route path="/Login" element={
          <>
            <Header />
            <Login />
          </>
        }></Route>
        <Route path="/Form-keg/:id" element={
          <>
            <Header txt="text-black" type="fixed" />
            <Form />
          </>
        }></Route>
        <Route path="/Admin/" element={
          <>
            <Header type="fixed" />
            <AdminPage />
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
