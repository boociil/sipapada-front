import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { AuthProvider } from './components/AuthContext.jsx'; // Pastikan ini benar
import RoutesAdmin from './components/RoutesAdmin.jsx';
import Main from './components/MainPage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Login from './components/Login.jsx'
import FormKeg from './components/FormKeg.jsx'
import FormVar from './components/FormVar.jsx'
import FormInd from './components/FormInd.jsx'
import AdminPage from "./components/AdminPage.jsx"
import ScrollToTop from './components/ScrollToTop.jsx';
import ComingSoonPage from './components/ComingSoonPage.jsx';
import KegPage from './components/KegPage.jsx';
import IndPage from './components/IndPage.jsx';
import VarPage from './components/VarPage.jsx';
import { GlobalStateProvider } from './components/GlobalStateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStateProvider>
      <AuthProvider> 
        <BrowserRouter>
        <ScrollToTop />
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
            <Route element={<RoutesAdmin />}>
              <Route path="/Admin/" element={
                <>
                  <Header type="fixed"/>
                  <AdminPage />
                </>
              }></Route>
            </Route>

            <Route path="/keg/:id" element={
              <>
                <Header txt="text-black" type="fixed"/>
                <KegPage />
              </>
            }></Route>
            <Route path="/Form-keg/:id" element={
              <>
                <Header txt="text-black" type="fixed"  />
                <FormKeg />
              </>
            }></Route>

            <Route path="/var/:id/:master_id" element={
              <>
                <Header txt="text-black" type="fixed" />
                <VarPage />
              </>
            }></Route>
            <Route path="/Form-var/:id/:master_id" element={
              <>
                <Header txt="text-black" type="fixed" />
                <FormVar />
              </>
            }></Route>

            <Route path="/ind/:id/:master_id" element={
              <>
                <Header txt="text-black" type="fixed"/>
                <IndPage />
              </>
            }></Route>
            <Route path="/Form-ind/:id/:master_id" element={
              <>
                <Header txt="text-black" type="fixed"  />
                <FormInd />
              </>
            }></Route>

            <Route path="/DDA/:id" element={
              <>
                <Header type="fixed" />
                <ComingSoonPage />
              </>
            }></Route>

            <Route path="/Rek-Stat/:id" element={
              <>
                <Header type="fixed" />
                <ComingSoonPage />
              </>
            }></Route>



          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GlobalStateProvider>
  </StrictMode>,
)
