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
import Women from './pages/women/Women';
import ProductsList from './components/productsPage/ProductsPage';
import ProductsBySubgroupPage from './components/ProductsBySubgroupPage/ProductsBySubgroupPage';
import CategoryProductsPage from './components/ProductsBySubgroupPage/ProductsBySubgroupPage';
import Forum from './pages/forum/Forum';
import ContactUs from './pages/contact/ContactUs ';
import Services from './pages/services/Services';
import MyListings from './pages/mylistings/MyListings';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = ({ token, email, userId, userName }) => {
    localStorage.setItem('token', token || '');
    localStorage.setItem('userId', userId || '');
    localStorage.setItem('email', email || '');
    localStorage.setItem('userName', userName || '');
  
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserName(userName);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('userName');
  
    setIsLoggedIn(false);
    setUserEmail('');
    setUserName('');
  
    navigate('/login'); // 👈 Dodato preusmeravanje
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
        <Route path="/women" element={<Women />} />
        <Route path="/women/clothing/:subgroup" element={<ProductsBySubgroupPage />} />
        <Route path="/women/:category/:group/:subgroup" element={<ProductsList />} />
        <Route path="/:category/:group/:subgroup" element={<CategoryProductsPage />} />
        <Route path="/women/beauty/:group/:subgroup" element={<ProductsBySubgroupPage />} />
        <Route path="/women/accessories/:group/:subgroup" element={<ProductsBySubgroupPage />} />
        <Route path="/women/bags/:group/:subgroup" element={<ProductsBySubgroupPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/listings" element={<MyListings />} />
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
