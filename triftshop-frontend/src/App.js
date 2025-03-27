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

  // Logika za prikazivanje NavMenu
  const shouldDisplayNavMenu = location.pathname !== '/userpanel';

  return (
    <>
      {/* Header se uvek prikazuje */}
      <Header isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} />
      {/* NavMenu se prikazuje samo ako nije na stranici UserPanel */}
      {shouldDisplayNavMenu && <NavMenu />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpanel" element={<UserPanel onLogout={handleLogout} />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* Footer se uvek prikazuje */}
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
