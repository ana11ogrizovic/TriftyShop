import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import NavMenu from './components/navMenu/NavMenu';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserPanel from './pages/userpanel/UserPanel';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import EditProfile from './pages/editprofile/EditProfile';
import AdForm from "./components/adForm/AdForm";
import TShirtPage from './pages/women/clothing/TShirtPage';
import Women from './pages/Women';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (email, name) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setUserName('');
    navigate('/login');
  };

  const shouldDisplayNavMenu = location.pathname !== '/userpanel' && location.pathname !== '/addlisting';

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} />
      {shouldDisplayNavMenu && <NavMenu />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpanel" element={<UserPanel onLogout={handleLogout} />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addlisting" element={<AdForm />} />
        <Route path="/women/clothing/t-shirt" element={<TShirtPage />} />
        <Route path="/women" element={<Women />} />

        {/* Dodaj ostale podstranice ovde */}
      </Routes>
      <Footer />
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
