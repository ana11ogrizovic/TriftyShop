import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Toolbar, TextField, Menu, MenuItem } from '@mui/material';
import './Header.css';
import logo from '../../assets/logo/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { FaPlus } from 'react-icons/fa'; // Importuj plus ikonu
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, userEmail, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Current path:", location.pathname);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleUserMenuOpen = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null);
  };

  const isUserPanelPage = location.pathname.includes('/userpanel'); // Provera da li smo na userpanel stranici
  const isAddListingPage = location.pathname.includes('/addlisting'); // Provera da li smo na addlisting stranici

  return (
    <header>
      <div style={{ backgroundColor: '#FDF6FA', padding: '10px', display: 'flex' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ marginRight: '10px', marginLeft: '3%' }}>
            <i className="fa fa-facebook-square" style={{ fontSize: '27px', color: '#221202d1', textTransform: 'lowercase' }}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>
            <i className="fa fa-instagram" aria-hidden="true" style={{ fontSize: '27px', color: '#221202d1', textTransform: 'lowercase' }}></i>
          </a>
          <a href="https://www.snapchat.com" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>
            <i className="fa fa-pinterest" aria-hidden="true" style={{ fontSize: '27px', color: '#221202d1', textTransform: 'lowercase' }}></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>
            <i className="fa fa-twitter-square" style={{ fontSize: '27px', color: '#221202d1', textTransform: 'lowercase' }}></i>
          </a>
        </div>

        <nav>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', paddingTop: '0.5rem' }}>
            {isLoggedIn && !isAddListingPage && ( // Provera da li nismo na addlisting stranici
              <li style={{ marginRight: '10px' }}>
                <Button
                  onClick={() => navigate("/addlisting")}
                  variant="contained"
                  style={{
                    backgroundColor: '#3F3038', // Postavlja prilagođenu boju pozadine
                    color: '#fff', // Postavlja boju teksta (bela za kontrast)
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    marginBottom: '-0.5rem',
                    width: '250px',
                    marginRight: '0.2rem'
                  }}
                >
                  <FaPlus style={{ marginRight: '8px' }} /> Add your listing
                </Button>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={handleUserMenuClose}>
                    <Link to="/editprofile" style={{ textDecoration: 'none', color: 'inherit', width: '180px' }}>
                      Edit Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={onLogout} style={{ color: 'red' }}>
                    Logout
                  </MenuItem>
                </Menu>
              </li>
            )}
            {!isLoggedIn && !isUserPanelPage && (
              <>
                <li>
                  <Link to="/login" style={{ textDecoration: 'none', color: '#555', marginRight: '10px', fontSize: '17px' }}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" style={{ textDecoration: 'none', color: '#555', marginRight: '0.7rem', marginLeft: '4px', fontSize: '17px' }}>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Glavni Toolbar sa logoom i pretraživačem */}
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#FDF6FA' }}>
        <div style={{ flex: 1, marginLeft: '2%' }}>
          <img src={logo} alt="Logo" style={{ height: '85px', backgroundColor: 'white' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* Ako smo na stranici userpanel, prikazujemo dugme "Dodaj oglas" */}
          {isLoggedIn && (
  <>
    <Button
      style={{
        textDecoration: 'none',
        color: '#221202d1',
        marginRight: '0.4rem',
        width: '250px',
        backgroundColor: 'rgba(243, 97, 175)',
        textTransform: 'lowercase',
        fontSize: '16px',
        marginTop: '-3.5rem',
      }}
      onClick={handleUserMenuOpen}
    >
      {userEmail}
      <i
        className="fa fa-caret-down"
        aria-hidden="true"
        style={{ fontSize: '14px', marginLeft: '5px' }}
      ></i>
    </Button>
    <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={handleUserMenuClose}>
                    <Link to="/editprofile" style={{ textDecoration: 'none', color: 'inherit', width: '180px' }}>
                      Edit Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={onLogout} style={{ color: 'red' }}>
                    Logout
                  </MenuItem>
                </Menu>
  </>
)}
        </div>
      </Toolbar>
    </header>
  );
};

export default Header;
