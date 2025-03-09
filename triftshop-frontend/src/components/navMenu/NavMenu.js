import React, { useState } from "react";
import "./NavMenu.css";

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




  return (
    <nav className="nav-menu">
      <ul>
        <li

          onMouseEnter={() => setWomenOpen(true)}
          onMouseLeave={() => setWomenOpen(false)}
        >
          <span className="menu-item">Women</span>
          {isWomenOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingOpen(true)}
                onMouseLeave={() => setClothingOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">T-shirt</li>
                    <li className="dropdown-item">Shorts</li>
                    <li className="dropdown-item">Jumpers</li>
                    <li className="dropdown-item">Suits</li>
                    <li className="dropdown-item">Skirts</li>
                    <li className="dropdown-item">Sweaters</li>
                    <li className="dropdown-item">Dresses</li>
                    <li className="dropdown-item">Skorts</li>
                    <li className="dropdown-item">Jumpsuits</li>
                    <li className="dropdown-item">Blouses</li>
                    <li className="dropdown-item">Cardigans</li>
                    <li className="dropdown-item">Tank Tops</li>
                    <li className="dropdown-item">Blazers</li>
                    <li className="dropdown-item">Pants</li>
                    <li className="dropdown-item">Leggings</li>
                    <li className="dropdown-item">Jackets</li>
                    <li className="dropdown-item">Coats</li>
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
                    <li className="dropdown-item">Boots</li>
                    <li className="dropdown-item">Sandals</li>
                    <li className="dropdown-item">Heels</li>
                    <li className="dropdown-item">Sneakers</li>
                    <li className="dropdown-item">Flats</li>
                    <li className="dropdown-item">Loafers</li>
                    <li className="dropdown-item">Wedges</li>
                    <li className="dropdown-item">Slippers</li>
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
                    <li className="dropdown-item">Face Creams</li>
                    <li className="dropdown-item">Shampoo</li>
                    <li className="dropdown-item">Conditioners</li>
                    <li className="dropdown-item">Hair Masks</li>
                    <li className="dropdown-item">Body Lotion</li>
                    <li className="dropdown-item">Perfume</li>
                    <li className="dropdown-item">Makeup</li>
                    <li className="dropdown-item">Nail Care</li>
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
                    <li className="dropdown-item">Jewelry</li>
                    <li className="dropdown-item">Sunglasses</li>
                    <li className="dropdown-item">Hats</li>
                    <li className="dropdown-item">Scarves</li>
                    <li className="dropdown-item">Belts</li>
                    <li className="dropdown-item">Watches</li>
                    <li className="dropdown-item">Hair Accessories</li>
                    <li className="dropdown-item">Gloves</li>
                    <li className="dropdown-item">Wallets</li>
                    <li className="dropdown-item">Headbands</li>
                    <li className="dropdown-item">Ties & Bow Ties</li>
                    <li className="dropdown-item">Leggings</li>
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
                    <li className="dropdown-item">Handbags</li>
                    <li className="dropdown-item">Tote Bags</li>
                    <li className="dropdown-item">Clutch Bags</li>
                    <li className="dropdown-item">Backpacks</li>
                    <li className="dropdown-item">Crossbody Bags</li>
                    <li className="dropdown-item">Shoulder Bags</li>
                    <li className="dropdown-item">Duffel Bags</li>
                    <li className="dropdown-item">Sling Bags</li>
                    <li className="dropdown-item">Laptop Bags</li>
                    <li className="dropdown-item">Beach Bags</li>
                    <li className="dropdown-item">Wallets</li>
                    <li className="dropdown-item">Messenger Bags</li>
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
          <span className="menu-item">Men</span>
          {isMenOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingMenOpen(true)}
                onMouseLeave={() => setClothingMenOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingMenOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">Suits</li>
                    <li className="dropdown-item">Jacket</li>
                    <li className="dropdown-item">T-shirts</li>
                    <li className="dropdown-item">Shirts</li>
                    <li className="dropdown-item">Jeans</li>
                    <li className="dropdown-item">Shorts</li>
                    <li className="dropdown-item">Sweaters</li>
                    <li className="dropdown-item">Blazers</li>
                    <li className="dropdown-item">Pants</li>
                    <li className="dropdown-item">Jumpers</li>
                    <li className="dropdown-item">Hoodies</li>
                    <li className="dropdown-item">Trousers</li>
                    <li className="dropdown-item">Vests</li>
                    <li className="dropdown-item">Coats</li>
                    <li className="dropdown-item">Chinos</li>
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
                    <li className="dropdown-item">Boots</li>
                    <li className="dropdown-item">Sneakers</li>
                    <li className="dropdown-item">Flats</li>
                    <li className="dropdown-item">Slippers</li>
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
                    <li className="dropdown-item">Shaving Cream</li>
                    <li className="dropdown-item">Aftershave</li>
                    <li className="dropdown-item">Face Wash</li>
                    <li className="dropdown-item">Shampoo</li>
                    <li className="dropdown-item">Conditioners</li>
                    <li className="dropdown-item">Hair Gel</li>
                    <li className="dropdown-item">Beard Oil</li>
                    <li className="dropdown-item">Perfume</li>
                    <li className="dropdown-item">Deodorants</li>
                    <li className="dropdown-item">Body Lotion</li>
                    <li className="dropdown-item">Face Creams</li>
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
                    <li className="dropdown-item">Analog Watches</li>
                    <li className="dropdown-item">Digital Watches</li>
                    <li className="dropdown-item">Smart Watches</li>
                    <li className="dropdown-item">Chronograph Watches</li>
                    <li className="dropdown-item">Luxury Watches</li>
                    <li className="dropdown-item">Diving Watches</li>
                    <li className="dropdown-item">Sports Watches</li>
                    <li className="dropdown-item">Fashion Watches</li>
                    <li className="dropdown-item">Leather Strap Watches</li>
                    <li className="dropdown-item">Metal Strap Watches</li>
                    <li className="dropdown-item">Wooden Watches</li>
                    <li className="dropdown-item">Pocket Watches</li>
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
                    <li className="dropdown-item">Leather Bags</li>
                    <li className="dropdown-item">Messenger Bags</li>
                    <li className="dropdown-item">Backpacks</li>
                    <li className="dropdown-item">Laptop Bags</li>
                    <li className="dropdown-item">Travel Bags</li>
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
                    <li className="dropdown-item">Belts</li>
                    <li className="dropdown-item">Hats</li>
                    <li className="dropdown-item">Sunglasses</li>
                    <li className="dropdown-item">Wallets</li>
                    <li className="dropdown-item">Cufflinks</li>
                    <li className="dropdown-item">Necklaces</li>
                    <li className="dropdown-item">Bracelets</li>
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
                    <li className="dropdown-item">Silk Ties</li>
                    <li className="dropdown-item">Linen Ties</li>
                    <li className="dropdown-item">Bow Ties</li>
                    <li className="dropdown-item">Pre-Tied Bow Ties</li>
                    <li className="dropdown-item">Pocket Squares</li>
                    <li className="dropdown-item">Tie Bars</li>
                    <li className="dropdown-item">Ascot Ties</li>
                    <li className="dropdown-item">Clip-On Ties</li>
                    <li className="dropdown-item">Knit Ties</li>
                    <li className="dropdown-item">Designer Ties</li>
                    <li className="dropdown-item">Slim Ties</li>
                    <li className="dropdown-item">Patterned Ties</li>
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
          <span className="menu-item">Children</span>
          {isKidsOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingKidsOpen(true)}
                onMouseLeave={() => setClothingKidsOpen(false)}
              >
                <span className="dropdown-item">Clothing</span>
                {isClothingKidsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">Dresses</li>
                    <li className="dropdown-item">Skirts</li>
                    <li className="dropdown-item">T-shirts</li>
                    <li className="dropdown-item">Jackets</li>
                    <li className="dropdown-item">Tops</li>
                    <li className="dropdown-item">Pants</li>
                    <li className="dropdown-item">Shorts</li>
                    <li className="dropdown-item">Sweaters</li>
                    <li className="dropdown-item">Overalls</li>
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
                    <li className="dropdown-item">Sneakers</li>
                    <li className="dropdown-item">Boots</li>
                    <li className="dropdown-item">Sandals</li>
                    <li className="dropdown-item">Slippers</li>
                    <li className="dropdown-item">Dress Shoes</li>
                    <li className="dropdown-item">Rain Boots</li>
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
                    <li className="dropdown-item">Hats</li>
                    <li className="dropdown-item">Gloves</li>
                    <li className="dropdown-item">Scarves</li>
                    <li className="dropdown-item">Bags</li>
                    <li className="dropdown-item">Headbands</li>
                    <li className="dropdown-item">Sunglasses</li>
                    <li className="dropdown-item">Belts</li>
                    <li className="dropdown-item">Watches</li>
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
                    <li className="dropdown-item">Educational Toys</li>
                    <li className="dropdown-item">Building Blocks</li>
                    <li className="dropdown-item">Action Figures</li>
                    <li className="dropdown-item">Dolls</li>
                    <li className="dropdown-item">Playsets</li>
                    <li className="dropdown-item">Stuffed Animals</li>
                    <li className="dropdown-item">Cars & Vehicles</li>
                    <li className="dropdown-item">Musical Toys</li>
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
                    <li className="dropdown-item">Pajamas</li>
                    <li className="dropdown-item">Onesies</li>
                    <li className="dropdown-item">Sleep Shorts</li>
                    <li className="dropdown-item">Nightgowns</li>
                    <li className="dropdown-item">Robes</li>
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
                    <li className="dropdown-item">Diapers</li>
                    <li className="dropdown-item">Baby Lotion</li>
                    <li className="dropdown-item">Baby Wipes</li>
                    <li className="dropdown-item">Baby Bottles</li>
                    <li className="dropdown-item">Pacifiers</li>
                    <li className="dropdown-item">Swaddles</li>
                    <li className="dropdown-item">Cribs</li>
                    <li className="dropdown-item">Car Seats</li>
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
                    <li className="dropdown-item">Sports Shoes</li>
                    <li className="dropdown-item">T-shirts</li>
                    <li className="dropdown-item">Leggings</li>
                    <li className="dropdown-item">Tracksuits</li>
                    <li className="dropdown-item">Gym Bags</li>
                    <li className="dropdown-item">Hoodies</li>
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
          <span className="menu-item">House</span>
          {isHouseOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setKitchenwareOpen(true)}
                onMouseLeave={() => setKitchenwareOpen(false)}
              >
                <span className="dropdown-item">Kitchenware</span>
                {isKitchenwareOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">Plates</li>
                    <li className="dropdown-item">Mugs</li>
                    <li className="dropdown-item">Glassware</li>
                    <li className="dropdown-item">Cutlery</li>
                    <li className="dropdown-item">Cookware</li>
                    <li className="dropdown-item">Utensils</li>
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
                    <li className="dropdown-item">Sofas</li>
                    <li className="dropdown-item">Chairs</li>
                    <li className="dropdown-item">Tables</li>
                    <li className="dropdown-item">Beds</li>
                    <li className="dropdown-item">Storage</li>
                    <li className="dropdown-item">Shelving Units</li>
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
                    <li className="dropdown-item">Lamps</li>
                    <li className="dropdown-item">Ceiling Lights</li>
                    <li className="dropdown-item">LED Lights</li>
                    <li className="dropdown-item">Wall Sconces</li>
                    <li className="dropdown-item">Chandeliers</li>
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
                    <li className="dropdown-item">Bins & Baskets</li>
                    <li className="dropdown-item">Closets & Wardrobes</li>
                    <li className="dropdown-item">Shelves</li>
                    <li className="dropdown-item">Drawer Organizers</li>
                    <li className="dropdown-item">Hooks & Hangers</li>
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
                    <li className="dropdown-item">Planters</li>
                    <li className="dropdown-item">Outdoor Furniture</li>
                    <li className="dropdown-item">Garden Tools</li>
                    <li className="dropdown-item">Artificial Plants</li>
                    <li className="dropdown-item">Indoor Plants</li>
                    <li className="dropdown-item">Pots</li>
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
                    <li className="dropdown-item">Cleaning Tools</li>
                    <li className="dropdown-item">Laundry Detergent</li>
                    <li className="dropdown-item">Mops & Brooms</li>
                    <li className="dropdown-item">Disinfectants</li>
                    <li className="dropdown-item">Vacuum Cleaners</li>
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
                    <li className="dropdown-item">Posters</li>
                    <li className="dropdown-item">Paintings</li>
                    <li className="dropdown-item">Framed Art</li>
                    <li className="dropdown-item">Mirrors</li>
                    <li className="dropdown-item">Wall Decals</li>
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
          <span className="menu-item">Pets</span>
          {isPetsOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setClothingPetsOpen(true)}
                onMouseLeave={() => setClothingPetsOpen(false)}
              >
                <span className="dropdown-item">Pet Clothing</span>
                {isClothingPetsOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">Dresses</li>
                    <li className="dropdown-item">Jackets</li>
                    <li className="dropdown-item">T-Shirts</li>
                    <li className="dropdown-item">Sweaters</li>
                    <li className="dropdown-item">Raincoats</li>
                    <li className="dropdown-item">Hoodies</li>
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
                    <li className="dropdown-item">Chew Toys</li>
                    <li className="dropdown-item">Plush Toys</li>
                    <li className="dropdown-item">Balls</li>
                    <li className="dropdown-item">Interactive Toys</li>
                    <li className="dropdown-item">Catnip Toys</li>
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
                    <li className="dropdown-item">Collars</li>
                    <li className="dropdown-item">Leashes</li>
                    <li className="dropdown-item">Harnesses</li>
                    <li className="dropdown-item">Bowties</li>
                    <li className="dropdown-item">Bandanas</li>
                    <li className="dropdown-item">Pet Tags</li>
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
                    <li className="dropdown-item">Dog Beds</li>
                    <li className="dropdown-item">Cat Trees</li>
                    <li className="dropdown-item">Pet Mats</li>
                    <li className="dropdown-item">Pet Cushions</li>
                    <li className="dropdown-item">Pet Sofas</li>
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
                    <li className="dropdown-item">Brushes</li>
                    <li className="dropdown-item">Shampoos</li>
                    <li className="dropdown-item">Nail Clippers</li>
                    <li className="dropdown-item">Grooming Gloves</li>
                    <li className="dropdown-item">Pet Hair Dryers</li>
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
                    <li className="dropdown-item">Dog Food</li>
                    <li className="dropdown-item">Cat Food</li>
                    <li className="dropdown-item">Treats</li>
                    <li className="dropdown-item">Supplements</li>
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
                    <li className="dropdown-item">Flea & Tick Treatment</li>
                    <li className="dropdown-item">Vitamins</li>
                    <li className="dropdown-item">First Aid Kits</li>
                    <li className="dropdown-item">Supplements</li>
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
                    <li className="dropdown-item">Carriers</li>
                    <li className="dropdown-item">Travel Beds</li>
                    <li className="dropdown-item">Travel Bowls</li>
                    <li className="dropdown-item">Pet Seat Covers</li>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={() => setPetTrainingOpen(true)}
                onMouseLeave={() => setPetTrainingOpen(false)}
              >
                <span className="dropdown-item">Pet Training</span>
                {isPetTrainingOpen && (
                  <ul className="dropdown sub-dropdown">
                    <li className="dropdown-item">Training Collars</li>
                    <li className="dropdown-item">Training Pads</li>
                    <li className="dropdown-item">Pet Clickers</li>
                    <li className="dropdown-item">Training Treats</li>
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
          <span className="menu-item">Buy & Sell</span>
          {isBuySellOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Forum</li>
              <li className="dropdown-item">Usluge</li>
            </ul>
          )}
        </li>


      </ul>
    </nav>
  );
};

export default NavMenu;
