import React, { useState } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";


const NavMenu = () => {
  const [isWomenOpen, setWomenOpen] = useState(false);
  const [isClothingOpen, setClothingOpen] = useState(false);
  const [isFootwearOpen, setFootwearOpen] = useState(false);
  const [isCareOpen, setCareOpen] = useState(false);
  const [isFashionAccessoriseOpen, setFashionAccessoriseOpen] = useState(false);
  const [isBagsOpen, setBagsOpen] = useState(false);
  const [isHomeOpen, setHomeOpen] = useState(false);



  return (
    <nav className="nav-menu">
      <ul>
        <li
          onMouseEnter={() => setHomeOpen(true)}
          onMouseLeave={() => setHomeOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>Home</Link>

        </li>
        <li
          onMouseEnter={() => setWomenOpen(true)}
          onMouseLeave={() => setWomenOpen(false)}
        >
          <Link to="/women" className="menu-item" style={{ fontSize: '17px' }}>
            Women
          </Link>
          {isWomenOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingOpen(true)}
                onMouseLeave={() => setClothingOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/women/clothing/t-shirt">T-shirt</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/shorts">Shorts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/jumpers">Jumpers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/suits">Suits</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/skirts">Skirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/sweater">Sweaters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/dresses">Dresses</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setFootwearOpen(true)}
                onMouseLeave={() => setFootwearOpen(false)}
              >
                <span className="dropdown-item">Shoes</span>
                {isFootwearOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/women/shoes/boots">Boots</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/sandals">Sandals</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/heels">Heels</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/sneakers">Sneakers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/flats">Flats</Link>
                    </li>
                  </ul>

                )}
              </li>

              {/* Care Dropdown */}
              <li
                onMouseEnter={() => setCareOpen(true)}
                onMouseLeave={() => setCareOpen(false)}
              >
                <span className="dropdown-item">Beauty & Care</span>
                {isCareOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/women/beautyandcare/face-creams">Face Creams</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beautyandcare/perfume">Perfume</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beautyandcare/nail-care">Nail Care</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={() => setFashionAccessoriseOpen(true)}
                onMouseLeave={() => setFashionAccessoriseOpen(false)}
              >
                <span className="dropdown-item">Fashion Accessories</span>
                {isFashionAccessoriseOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/women/fashion-accessories/jewelry">Jewelry</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/fashion-accessories/sunglasses">Sunglasses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/fashion-accessories/belts">Belts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/fashion-accessories/watches">Watches</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={() => setBagsOpen(true)}
                onMouseLeave={() => setBagsOpen(false)}
              >
                <span className="dropdown-item">Bags</span>
                {isBagsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/women/bags/handbags">Handbags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/backpacks">Backpacks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/Shoulder Bags">Shoulder Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/Laptop Bags">Laptop Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/Beach Bags">Beach Bags</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setHomeOpen(true)}
          onMouseLeave={() => setHomeOpen(false)}
        >
          <Link to="/forum" className="menu-item" style={{ fontSize: '17px' }}>Forum</Link>

        </li>

        <li
          onMouseEnter={() => setHomeOpen(true)}
          onMouseLeave={() => setHomeOpen(false)}
        >
          <Link to="/services" className="menu-item" style={{ fontSize: '17px' }}>Services</Link>

        </li>
        <li
          onMouseEnter={() => setHomeOpen(true)}
          onMouseLeave={() => setHomeOpen(false)}
        >
          <Link to="/contact" className="menu-item" style={{ fontSize: '17px' }}>Contact</Link>

        </li>

      </ul>
    </nav>
  );
};

export default NavMenu;
