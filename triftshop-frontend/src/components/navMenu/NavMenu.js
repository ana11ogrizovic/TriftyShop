import React, { useState } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";


const NavMenu = () => {
  const [isWomenOpen, setWomenOpen] = useState(false);
  const [isClothingOpen, setClothingOpen] = useState(false);
  const [isFootwearOpen, setFootwearOpen] = useState(false);
  const [isCareOpen, setCareOpen] = useState(false);
  const [isFootwearMenOpen, setFootwearMenOpen] = useState(false);
  const [isCareMenOpen, setCareMenOpen] = useState(false);
  const [isFashionAccessoriseOpen, setFashionAccessoriseOpen] = useState(false);
  const [isBagsOpen, setBagsOpen] = useState(false);
  const [isMenOpen, setMenOpen] = useState(false);
  const [isClothingMenOpen, setClothingMenOpen] = useState(false);
  const [isKidsOpen, setKidsOpen] = useState(false);
  const [isClothingKidsOpen, setClothingKidsOpen] = useState(false);
  const [isHouseOpen, setHouseOpen] = useState(false);
  const [isClothingHouseOpen, setClothingHouseOpen] = useState(false);
  const [isPetsOpen, setPetsOpen] = useState(false);
  const [isClothingPetsOpen, setClothingPetsOpen] = useState(false);
  const [isWatchespen, setWatchesOpen] = useState(false);
  const [isBagsMenOpen, setBagsMenOpen] = useState(false);
  const [isAccessoriseMenOpen, setAccessoriseMenOpen] = useState(false);
  const [isTieOpen, setTieOpen] = useState(false);
  const [isBuySellOpen, setBuySellOpen] = useState(false);
  const [isClothingBuySellOpen, setClothingBuySellOpen] = useState(false);
  const [isShoesKidsOpen, setShoesKidsOpen] = useState(false);
  const [isAccessoriesKidsOpen, setAccessoriesKidsOpen] = useState(false);
  const [isToysKidsOpen, setToysKidsOpen] = useState(false);
  const [isSleepwearKidsOpen, setSleepwearKidsOpen] = useState(false);
  const [isBabyCareKidsOpen, setBabyCareKidsOpen] = useState(false);
  const [isSportswearKidsOpen, setSportswearKidsOpen] = useState(false);
  const [isKitchenwareOpen, setKitchenwareOpen] = useState(false);
  const [isFurnitureOpen, setFurnitureOpen] = useState(false);
  const [isLightingOpen, setLightingOpen] = useState(false);
  const [isStorageOpen, setStorageOpen] = useState(false);
  const [isGardeningOpen, setGardeningOpen] = useState(false);
  const [isCleaningSuppliesOpen, setCleaningSuppliesOpen] = useState(false);
  const [isWallArtOpen, setWallArtOpen] = useState(false);
  const [isPetToysOpen, setPetToysOpen] = useState(false);
  const [isPetAccessoriesOpen, setPetAccessoriesOpen] = useState(false);
  const [isPetBedsOpen, setPetBedsOpen] = useState(false);
  const [isPetGroomingOpen, setPetGroomingOpen] = useState(false);
  const [isPetFoodTreatsOpen, setPetFoodTreatsOpen] = useState(false);
  const [isPetHealthOpen, setPetHealthOpen] = useState(false);
  const [isPetTravelOpen, setPetTravelOpen] = useState(false);
  const [isPetTrainingOpen, setPetTrainingOpen] = useState(false);
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
                      <Link to="/women/clothing/sweaters">Sweaters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/dresses">Dresses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/skorts">Skorts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/jumpsuits">Jumpsuits</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/blouses">Blouses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/cardigans">Cardigans</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/tank tops">Tank Tops</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/blazers">Blazers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/pants">Pants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/leggings">Leggings</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/jackets">Jackets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/clothing/coats">Coats</Link>
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
                    <li className="dropdown-item">
                      <Link to="/women/shoes/loafers">Loafers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/wedges">Wedges</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/shoes/slippers">Slippers</Link>
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
                      <Link to="/women/beauty-and-care/face-creams">Face Creams</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/shampoo">Shampoo</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/conditioners">Conditioners</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/hair-masks">Hair Masks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/body-lotion">Body Lotion</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/perfume">Perfume</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/makeup">Makeup</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/beauty-and-care/nail-care">Nail Care</Link>
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
                      <Link to="/women/accessories/jewelry">Jewelry</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/sunglasses">Sunglasses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/hats">Hats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/scarves">Scarves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/belts">Belts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/watches">Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/hair-accessories">Hair Accessories</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/gloves">Gloves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/wallets">Wallets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/headbands">Headbands</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories/ties-bow-ties">Ties & Bow Ties</Link>
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
                      <Link to="/women/bags/tote-bags">Tote Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/clutch-bags">Clutch Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/backpacks">Backpacks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/crossbody-bags">Crossbody Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/shoulder-bags">Shoulder Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/duffel-bags">Duffel Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/sling-bags">Sling Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/laptop-bags">Laptop Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/beach-bags">Beach Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/bags/messenger-bags">Messenger Bags</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>










        <li
          onMouseEnter={() => setMenOpen(true)}
          onMouseLeave={() => setMenOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>Men</Link>
          {isMenOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingMenOpen(true)}
                onMouseLeave={() => setClothingMenOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/clothing/suits">Suits</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/jacket">Jacket</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/t-shirts">T-shirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/shirts">Shirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/jeans">Jeans</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/shorts">Shorts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/sweaters">Sweaters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/blazers">Blazers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/pants">Pants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/jumpers">Jumpers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/hoodies">Hoodies</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/trousers">Trousers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/vests">Vests</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/coats">Coats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/clothing/chinos">Chinos</Link>
                    </li>
                  </ul>

                )}
              </li>
              <li
                onMouseEnter={() => setFootwearMenOpen(true)}
                onMouseLeave={() => setFootwearMenOpen(false)}
              >
                <span className="dropdown-item">Shoes</span>
                {isFootwearMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/shoes/boots">Boots</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/sneakers">Sneakers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/flats">Flats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/slippers">Slippers</Link>
                    </li>
                  </ul>

                )}
              </li>

              {/* Care Dropdown */}
              <li
                onMouseEnter={() => setCareMenOpen(true)}
                onMouseLeave={() => setCareMenOpen(false)}
              >
                <span className="dropdown-item">Men Care</span>
                {isCareMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/shaving-cream">Shaving Cream</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/aftershave">Aftershave</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/face-wash">Face Wash</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/shampoo">Shampoo</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/conditioners">Conditioners</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/hair-gel">Hair Gel</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/beard-oil">Beard Oil</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/perfume">Perfume</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/deodorants">Deodorants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/body-lotion">Body Lotion</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/beauty-and-care/face-creams">Face Creams</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={() => setWatchesOpen(true)}
                onMouseLeave={() => setWatchesOpen(false)}
              >
                <span className="dropdown-item"> Watches </span>
                {isWatchespen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/watches/analog">Analog Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/digital">Digital Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/smart">Smart Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/chronograph">Chronograph Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/luxury">Luxury Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/diving">Diving Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/sports">Sports Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/fashion">Fashion Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/leather-strap">Leather Strap Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/metal-strap">Metal Strap Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/wooden">Wooden Watches</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/watches/pocket">Pocket Watches</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setBagsMenOpen(true)}
                onMouseLeave={() => setBagsMenOpen(false)}
              >
                <span className="dropdown-item"> Bags </span>
                {isBagsMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/bags/leather">Leather Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/bags/messenger">Messenger Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/bags/backpacks">Backpacks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/bags/laptop">Laptop Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/bags/travel">Travel Bags</Link>
                    </li>
                  </ul>


                )}
              </li>

              <li
                onMouseEnter={() => setAccessoriseMenOpen(true)}
                onMouseLeave={() => setAccessoriseMenOpen(false)}
              >
                <span className="dropdown-item"> Men Accessories </span>
                {isAccessoriseMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/accessories/belts">Belts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/hats">Hats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/sunglasses">Sunglasses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/wallets">Wallets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/cufflinks">Cufflinks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/necklaces">Necklaces</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/bracelets">Bracelets</Link>
                    </li>
                  </ul>


                )}
              </li>

              <li
                onMouseEnter={() => setTieOpen(true)}
                onMouseLeave={() => setTieOpen(false)}
              >
                <span className="dropdown-item"> Ties & Bow Ties </span>
                {isTieOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/ties/silk">Silk Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/linen">Linen Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/bow">Bow Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/pre-tied">Pre-Tied Bow Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/pocket-squares">Pocket Squares</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/tie-bars">Tie Bars</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/ascot">Ascot Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/clip-on">Clip-On Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/knit">Knit Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/designer">Designer Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/slim">Slim Ties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/ties/patterned">Patterned Ties</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>





        <li
          onMouseEnter={() => setKidsOpen(true)}
          onMouseLeave={() => setKidsOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>Children</Link>
          {isKidsOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingKidsOpen(true)}
                onMouseLeave={() => setClothingKidsOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/dresses">Dresses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/skirts">Skirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/t-shirts">T-shirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/jackets">Jackets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/tops">Tops</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/pants">Pants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/shorts">Shorts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/sweaters">Sweaters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/clothing/overalls">Overalls</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setShoesKidsOpen(true)}
                onMouseLeave={() => setShoesKidsOpen(false)}
              >
                <span className="dropdown-item">Shoes</span>
                {isShoesKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/shoes/sneakers">Sneakers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/boots">Boots</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/sandals">Sandals</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/slippers">Slippers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/dress-shoes">Dress Shoes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/shoes/rain-boots">Rain Boots</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setAccessoriesKidsOpen(true)}
                onMouseLeave={() => setAccessoriesKidsOpen(false)}
              >
                <span className="dropdown-item">Accessories</span>
                {isAccessoriesKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/men/accessories/hats">Hats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/gloves">Gloves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/scarves">Scarves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/bags">Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/headbands">Headbands</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/sunglasses">Sunglasses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/belts">Belts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories/watches">Watches</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setToysKidsOpen(true)}
                onMouseLeave={() => setToysKidsOpen(false)}
              >
                <span className="dropdown-item">Toys</span>
                {isToysKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kids/toys/educational">Educational Toys</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/building-blocks">Building Blocks</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/action-figures">Action Figures</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/dolls">Dolls</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/playsets">Playsets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/stuffed-animals">Stuffed Animals</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/cars-vehicles">Cars & Vehicles</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys/musical">Musical Toys</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setSleepwearKidsOpen(true)}
                onMouseLeave={() => setSleepwearKidsOpen(false)}
              >
                <span className="dropdown-item">Sleepwear</span>
                {isSleepwearKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kids/sleepwear/pajamas">Pajamas</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sleepwear/onesies">Onesies</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sleepwear/sleep-shorts">Sleep Shorts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sleepwear/nightgowns">Nightgowns</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sleepwear/robes">Robes</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setBabyCareKidsOpen(true)}
                onMouseLeave={() => setBabyCareKidsOpen(false)}
              >
                <span className="dropdown-item">Baby Care</span>
                {isBabyCareKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/diapers">Diapers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/baby-lotion">Baby Lotion</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/baby-wipes">Baby Wipes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/baby-bottles">Baby Bottles</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/pacifiers">Pacifiers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/swaddles">Swaddles</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/cribs">Cribs</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/baby-care/car-seats">Car Seats</Link>
                    </li>
                  </ul>

                )}
              </li>

              <li
                onMouseEnter={() => setSportswearKidsOpen(true)}
                onMouseLeave={() => setSportswearKidsOpen(false)}
              >
                <span className="dropdown-item">Sportswear</span>
                {isSportswearKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/sports-shoes">Sports Shoes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/t-shirts">T-shirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/leggings">Leggings</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/tracksuits">Tracksuits</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/gym-bags">Gym Bags</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/sportswear/hoodies">Hoodies</Link>
                    </li>
                  </ul>
                )}
              </li>

            </ul>
          )}
        </li>



        <li
          onMouseEnter={() => setHouseOpen(true)}
          onMouseLeave={() => setHouseOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>House</Link>
          {isHouseOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setKitchenwareOpen(true)}
                onMouseLeave={() => setKitchenwareOpen(false)}
              >
                <span className="dropdown-item">Kitchenware</span>
                {isKitchenwareOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/kitchenware/plates">Plates</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kitchenware/mugs">Mugs</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kitchenware/glassware">Glassware</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kitchenware/cutlery">Cutlery</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kitchenware/cookware">Cookware</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kitchenware/utensils">Utensils</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setFurnitureOpen(true)}
                onMouseLeave={() => setFurnitureOpen(false)}
              >
                <span className="dropdown-item">Furniture</span>
                {isFurnitureOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/furniture/sofas">Sofas</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/furniture/chairs">Chairs</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/furniture/tables">Tables</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/furniture/beds">Beds</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/furniture/storage">Storage</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/furniture/shelving-units">Shelving Units</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setLightingOpen(true)}
                onMouseLeave={() => setLightingOpen(false)}
              >
                <span className="dropdown-item">Lighting</span>
                {isLightingOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/lighting/lamps">Lamps</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/lighting/ceiling-lights">Ceiling Lights</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/lighting/led-lights">LED Lights</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/lighting/wall-sconces">Wall Sconces</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/lighting/chandeliers">Chandeliers</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setStorageOpen(true)}
                onMouseLeave={() => setStorageOpen(false)}
              >
                <span className="dropdown-item">Storage & Organization</span>
                {isStorageOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/storage-organization/bins-baskets">Bins & Baskets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/storage-organization/closets-wardrobes">Closets & Wardrobes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/storage-organization/shelves">Shelves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/storage-organization/drawer-organizers">Drawer Organizers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/storage-organization/hooks-hangers">Hooks & Hangers</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setGardeningOpen(true)}
                onMouseLeave={() => setGardeningOpen(false)}
              >
                <span className="dropdown-item">Gardening & Plants</span>
                {isGardeningOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/gardening/planters">Planters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/gardening/outdoor-furniture">Outdoor Furniture</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/gardening/garden-tools">Garden Tools</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/gardening/artificial-plants">Artificial Plants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/gardening/indoor-plants">Indoor Plants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/gardening/pots">Pots</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setCleaningSuppliesOpen(true)}
                onMouseLeave={() => setCleaningSuppliesOpen(false)}
              >
                <span className="dropdown-item">Cleaning Supplies</span>
                {isCleaningSuppliesOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/cleaning-supplies/cleaning-tools">Cleaning Tools</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/cleaning-supplies/laundry-detergent">Laundry Detergent</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/cleaning-supplies/mops-brooms">Mops & Brooms</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/cleaning-supplies/disinfectants">Disinfectants</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/cleaning-supplies/vacuum-cleaners">Vacuum Cleaners</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setWallArtOpen(true)}
                onMouseLeave={() => setWallArtOpen(false)}
              >
                <span className="dropdown-item">Wall Art & Mirrors</span>
                {isWallArtOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/wall-art-mirrors/posters">Posters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/wall-art-mirrors/paintings">Paintings</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/wall-art-mirrors/framed-art">Framed Art</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/wall-art-mirrors/mirrors">Mirrors</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/wall-art-mirrors/wall-decals">Wall Decals</Link>
                    </li>
                  </ul>
                )}

              </li>
            </ul>
          )}
        </li>




        <li
          onMouseEnter={() => setPetsOpen(true)}
          onMouseLeave={() => setPetsOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>Pets</Link>
          {isPetsOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingPetsOpen(true)}
                onMouseLeave={() => setClothingPetsOpen(false)}
              >
                <span className="dropdown-item">Pet Clothing</span>
                {isClothingPetsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/dresses">Dresses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/jackets">Jackets</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/t-shirts">T-Shirts</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/sweaters">Sweaters</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/raincoats">Raincoats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-clothing/hoodies">Hoodies</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetToysOpen(true)}
                onMouseLeave={() => setPetToysOpen(false)}
              >
                <span className="dropdown-item">Pet Toys</span>
                {isPetToysOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-toys/chew-toys">Chew Toys</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-toys/plush-toys">Plush Toys</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-toys/balls">Balls</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-toys/interactive-toys">Interactive Toys</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-toys/catnip-toys">Catnip Toys</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetAccessoriesOpen(true)}
                onMouseLeave={() => setPetAccessoriesOpen(false)}
              >
                <span className="dropdown-item">Pet Accessories</span>
                {isPetAccessoriesOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/collars">Collars</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/leashes">Leashes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/harnesses">Harnesses</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/bowties">Bowties</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/bandanas">Bandanas</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-accessories/pet-tags">Pet Tags</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetBedsOpen(true)}
                onMouseLeave={() => setPetBedsOpen(false)}
              >
                <span className="dropdown-item">Pet Beds & Furniture</span>
                {isPetBedsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-beds-furniture/dog-beds">Dog Beds</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-beds-furniture/cat-trees">Cat Trees</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-beds-furniture/pet-mats">Pet Mats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-beds-furniture/pet-cushions">Pet Cushions</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-beds-furniture/pet-sofas">Pet Sofas</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetGroomingOpen(true)}
                onMouseLeave={() => setPetGroomingOpen(false)}
              >
                <span className="dropdown-item">Pet Grooming</span>
                {isPetGroomingOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-grooming/brushes">Brushes</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-grooming/shampoos">Shampoos</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-grooming/nail-clippers">Nail Clippers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-grooming/grooming-gloves">Grooming Gloves</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-grooming/pet-hair-dryers">Pet Hair Dryers</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetFoodTreatsOpen(true)}
                onMouseLeave={() => setPetFoodTreatsOpen(false)}
              >
                <span className="dropdown-item">Pet Food & Treats</span>
                {isPetFoodTreatsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-food-treats/dog-food">Dog Food</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-food-treats/cat-food">Cat Food</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-food-treats/treats">Treats</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-food-treats/supplements">Supplements</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetHealthOpen(true)}
                onMouseLeave={() => setPetHealthOpen(false)}
              >
                <span className="dropdown-item">Pet Health</span>
                {isPetHealthOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-health/flea-tick-treatment">Flea & Tick Treatment</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-health/vitamins">Vitamins</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-health/first-aid-kits">First Aid Kits</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-health/supplements">Supplements</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetTravelOpen(true)}
                onMouseLeave={() => setPetTravelOpen(false)}
              >
                <span className="dropdown-item">Pet Travel</span>
                {isPetTravelOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-travel/carriers">Carriers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/travel-beds">Travel Beds</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/travel-bowls">Travel Bowls</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/pet-seat-covers">Pet Seat Covers</Link>
                    </li>
                  </ul>
                )}

              </li>

              <li
                onMouseEnter={() => setPetTrainingOpen(true)}
                onMouseLeave={() => setPetTrainingOpen(false)}
              >
                <span className="dropdown-item">Pet Training</span>
                {isPetTravelOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">
                      <Link to="/pet-travel/carriers">Carriers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/travel-beds">Travel Beds</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/travel-bowls">Travel Bowls</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/pet-travel/pet-seat-covers">Pet Seat Covers</Link>
                    </li>
                  </ul>
                )}

              </li>

            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setBuySellOpen(true)}
          onMouseLeave={() => setBuySellOpen(false)}
        >
          <Link to="/" className="menu-item" style={{ fontSize: '17px' }}>Buy & Sell</Link>
          {isBuySellOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">
                <Link to="/buy-sell/forum">Forum</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/buy-sell/services">Services</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
