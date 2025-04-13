import React, { useState, useEffect } from "react";
import "./AdForm.css"; // CSS for styles

const categories = [
  {
    name: 'Women',
    groups: [
      { label: 'Clothing', options: ['T-shirt', 'Shorts', 'Jumpers', 'Suits', 'Skirts', 'Sweaters', 'Dresses', 'Skorts', 'Jumpsuits', 'Blouses', 'Cardigans', 'Tank Tops', 'Blazers', 'Pants', 'Leggings', 'Jackets', 'Coats'] },
      { label: 'Shoes', options: ['Boots', 'Sandals', 'Heels', 'Sneakers', 'Flats', 'Loafers', 'Wedges', 'Slippers'] },
      { label: 'Beauty & Care', options: ['Face Creams', 'Shampoo', 'Conditioners', 'Hair Masks', 'Body Lotion', 'Perfume', 'Makeup', 'Nail Care'] },
      { label: 'Fashion Accessories', options: ['Jewelry', 'Sunglasses', 'Hats', 'Scarves', 'Belts', 'Watches', 'Hair Accessories', 'Gloves', 'Wallets', 'Headbands', 'Ties & Bow Ties'] },
      { label: 'Bags', options: ['Handbags', 'Tote Bags', 'Clutch Bags', 'Backpacks', 'Crossbody Bags', 'Shoulder Bags', 'Duffel Bags', 'Sling Bags', 'Laptop Bags', 'Beach Bags', 'Messenger Bags'] },
    ],
  },
  {
    name: 'Men',
    groups: [
      { label: 'Clothing', options: ['Suits', 'Jacket', 'T-shirts', 'Shirts', 'Jeans', 'Shorts', 'Sweaters', 'Blazers', 'Pants', 'Jumpers', 'Hoodies', 'Trousers', 'Vests', 'Coats', 'Chinos'] },
      { label: 'Shoes', options: ['Boots', 'Sneakers', 'Flats', 'Slippers'] },
      { label: 'Men Care', options: ['Shaving Cream', 'Aftershave', 'Face Wash', 'Shampoo', 'Conditioners', 'Hair Gel', 'Beard Oil', 'Perfume', 'Deodorants', 'Body Lotion', 'Face Creams'] },
      { label: 'Watches', options: ['Analog Watches', 'Digital Watches', 'Smart Watches', 'Chronograph Watches', 'Luxury Watches', 'Diving Watches', 'Sports Watches', 'Fashion Watches', 'Leather Strap Watches', 'Metal Strap Watches', 'Wooden Watches', 'Pocket Watches'] },
      { label: 'Bags', options: ['Leather Bags', 'Messenger Bags', 'Backpacks', 'Laptop Bags', 'Travel Bags'] },
      { label: 'Men Accessories', options: ['Belts', 'Hats', 'Sunglasses', 'Wallets', 'Cufflinks', 'Necklaces', 'Bracelets'] },
      { label: 'Ties & Bow Ties', options: ['Silk Ties', 'Linen Ties', 'Bow Ties', 'Pre-Tied Bow Ties', 'Pocket Squares', 'Tie Bars', 'Ascot Ties', 'Clip-On Ties', 'Knit Ties', 'Designer Ties', 'Slim Ties', 'Patterned Ties'] },
    ],
  },
  {
    name: 'Children',
    groups: [
      { label: 'Clothing', options: ['Dresses', 'Skirts', 'T-shirts', 'Jackets', 'Tops', 'Pants', 'Shorts', 'Sweaters', 'Overalls'] },
      { label: 'Shoes', options: ['Sneakers', 'Boots', 'Sandals', 'Slippers', 'Dress Shoes', 'Rain Boots'] },
      { label: 'Accessories', options: ['Hats', 'Gloves', 'Scarves', 'Bags', 'Headbands', 'Sunglasses', 'Belts', 'Watches'] },
      { label: 'Toys', options: ['Educational Toys', 'Building Blocks', 'Action Figures', 'Dolls', 'Playsets', 'Stuffed Animals', 'Cars & Vehicles', 'Musical Toys'] },
      { label: 'Sleepwear', options: ['Pajamas', 'Onesies', 'Sleep Shorts', 'Nightgowns', 'Robes'] },
      { label: 'Baby Care', options: ['Diapers', 'Baby Lotion', 'Baby Wipes', 'Baby Bottles', 'Pacifiers', 'Swaddles', 'Cribs', 'Car Seats'] },
      { label: 'Sportswear', options: ['Sports Shoes', 'T-shirts', 'Leggings', 'Tracksuits', 'Gym Bags', 'Hoodies'] },
    ],
  },
  {
    name: 'House',
    groups: [
      { label: 'Kitchenware', options: ['Plates', 'Mugs', 'Glassware', 'Cutlery', 'Cookware', 'Utensils'] },
      { label: 'Furniture', options: ['Sofas', 'Chairs', 'Tables', 'Beds', 'Storage', 'Shelving Units'] },
      { label: 'Lighting', options: ['Lamps', 'Ceiling Lights', 'LED Lights', 'Wall Sconces', 'Chandeliers'] },
      { label: 'Storage & Organization', options: ['Bins & Baskets', 'Closets & Wardrobes', 'Shelves', 'Drawer Organizers', 'Hooks & Hangers'] },
      { label: 'Gardening & Plants', options: ['Planters', 'Outdoor Furniture', 'Garden Tools', 'Artificial Plants', 'Indoor Plants', 'Pots'] },
      { label: 'Cleaning Supplies', options: ['Cleaning Tools', 'Laundry Detergent', 'Mops & Brooms', 'Disinfectants', 'Vacuum Cleaners'] },
      { label: 'Wall Art & Mirrors', options: ['Posters', 'Paintings', 'Framed Art', 'Mirrors', 'Wall Decals'] },
    ],
  },
  {
    name: 'Pets',
    groups: [
      { label: 'Pet Clothing', options: ['Dresses', 'Jackets', 'T-Shirts', 'Sweaters', 'Raincoats', 'Hoodies'] },
      { label: 'Pet Toys', options: ['Chew Toys', 'Plush Toys', 'Balls', 'Interactive Toys', 'Catnip Toys'] },
      { label: 'Pet Accessories', options: ['Collars', 'Leashes', 'Harnesses', 'Bowties', 'Bandanas', 'Pet Tags'] },
      { label: 'Pet Beds & Furniture', options: ['Dog Beds', 'Cat Trees', 'Pet Mats', 'Pet Cushions', 'Pet Sofas'] },
      { label: 'Pet Grooming', options: ['Brushes', 'Shampoos', 'Nail Clippers', 'Grooming Gloves', 'Pet Hair Dryers'] },
      { label: 'Pet Food & Treats', options: ['Dog Food', 'Cat Food', 'Treats', 'Supplements'] },
      { label: 'Pet Health', options: ['Flea & Tick Treatment', 'Vitamins', 'First Aid Kits', 'Supplements'] },
      { label: 'Pet Travel', options: ['Carriers', 'Travel Beds', 'Travel Bowls', 'Pet Seat Covers'] },
      { label: 'Pet Training', options: ['Training Collars', 'Training Pads', 'Pet Clickers', 'Training Treats'] },
    ],
  },
];


const AdForm = () => {
  const [activeStep, setActiveStep] = useState(1); // Track the active step
  const [formData, setFormData] = useState({
    images: [],
    itemName: "",
    price: "",
    priceOption: "negotiable",
    description: "",
    condition: "new",
    deliveryMethod: "pickup",
    category: "",
    group: "",
    subgroup: "", // Dodali smo stanje za subgrupu
    advertiserName: "",
    contactInfo: "",
  });


  const [selectedCategory, setSelectedCategory] = useState(""); // To track the selected category
  const [groups, setGroups] = useState([]); // Store groups based on selected category

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getSubgroupOptions = (group) => {
    const category = categories.find(cat => cat.name === selectedCategory); // Pronaći kategoriju
    const groupData = category ? category.groups.find(g => g.label === group) : null;
    return groupData ? groupData.options : [];
  };

  const handleSubgroupChange = (e) => {
    const subgroup = e.target.value;
    setFormData({ ...formData, subgroup });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    const category = categories.find(cat => cat.name === selectedCategory);
    setGroups(category ? category.groups : []); // Postavljanje grupa na osnovu kategorije
    setFormData({ ...formData, category: selectedCategory, group: "", subgroup: "" }); // Resetujemo grupu i subgrupu
  };

  // Handle group selection
  const handleGroupChange = (e) => {
    const group = e.target.value;
    setFormData({ ...formData, group, subgroup: "" }); // Resetujemo subgrupu
  };


  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
  
    setFormData((prevData) => {
      if (prevData.images.length >= 8) {
        alert("Maximum number of images reached (8).");
        return prevData;
      }
      const newImages = [...prevData.images, ...files.slice(0, 8 - prevData.images.length)];
      return { ...prevData, images: newImages };
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // ➕ Kreiramo FormData objekat
    const data = new FormData();
  
    // ➕ Dodamo slike (multiple)
    formData.images.forEach((img) => {
      data.append("images", img);
    });
  
    // ➕ Dodamo ostala polja
    for (const key in formData) {
      if (key !== "images") {
        data.append(key, formData[key]);
      }
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/ads/add", {
        method: "POST",
        body: data, // 🔥 Važno! NEMA Content-Type!
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Ad posted successfully!");
        setFormData({
          images: [],
          itemName: "",
          price: "",
          priceOption: "negotiable",
          description: "",
          condition: "new",
          deliveryMethod: "pickup",
          category: "",
          group: "",
          subgroup: "",
          advertiserName: "",
          contactInfo: "",
        });
      } else {
        alert("Greška: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Greška pri postavljanju oglasa.");
    }
  };
  



  return (
    <div className="page-container" style={{ justifyContent: 'center' }}>

      <div className="form-wrapper">
        {/* Steps on the left */}
        <div className="steps-sidebar">
          <div className={`step ${activeStep === 1 ? 'active-step' : ''}`} onClick={() => setActiveStep(1)}>1. First Step</div>
          <div className={`step ${activeStep === 2 ? 'active-step' : ''}`} onClick={() => setActiveStep(2)}>2. Second Step</div>
          <div className={`step ${activeStep === 3 ? 'active-step' : ''}`} onClick={() => setActiveStep(3)}>3. Third Step</div>
          <div className={`step ${activeStep === 4 ? 'active-step' : ''}`} onClick={() => setActiveStep(4)}>4. Final Step</div>
        </div>

        {/* Form sections */}
        <form className="ad-form" onSubmit={handleSubmit}>
          {/* Section 1: Image Upload */}
          {/* Section 1: Image Upload */}
{activeStep === 1 && (
  <div className="form-section">
    <h2 className="section-title">Add Images</h2>
    <div className="form-group">
      <div className="upload-container">
        {formData.images.length > 0 && (
          <div className="image-preview">
            <img src={URL.createObjectURL(formData.images[0])} alt="Product" />
          </div>
        )}
        <div className="upload-box" onClick={() => document.getElementById("file-input").click()}>
          <span className="upload-icon">+</span>
          <span className="upload-text">Upload Images</span>
        </div>
      </div>
      <input
        id="file-input"
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
    </div>
  </div>
)}


          {/* Section 2: Item Details */}
          {activeStep === 2 && (
            <div className="form-section">
              <h2 className="section-title">Item Details</h2>
              <div className="form-group">
                <label>Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  placeholder="Enter the item name"
                  value={formData.itemName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <div className="price-group" style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleInputChange}
                    style={{ marginRight: '10px', width: '80%' }}
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    style={{ width: '50%' }}
                  >
                    <option value="eur">EUR</option>
                    <option value="rsd">RSD</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter item description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {selectedCategory && (
                <div className="form-group">
                  <label>Group</label>
                  <select name="group" value={formData.group} onChange={handleGroupChange}>
                    <option value="">Select Group</option>
                    {groups.map((group, index) => (
                      <option key={index} value={group.label}>{group.label}</option>
                    ))}
                  </select>
                </div>
              )}

              {formData.group && (
                <div className="form-group">
                  <label>Subgroup</label>
                  <select name="subgroup" value={formData.subgroup} onChange={handleSubgroupChange}>
                    <option value="">Select Subgroup</option>
                    {getSubgroupOptions(formData.group).map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}

            </div>
          )}

          {/* Section 3: Additional Details */}
          {activeStep === 3 && (
            <div className="form-section">
              <h2 className="section-title">Additional Details</h2>
              <div className="form-group">
                <label>Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                >
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
              </div>
              <div className="form-group">
                <label>Delivery Method</label>
                <select
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleInputChange}
                >
                  <option value="pickup">Pickup</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>
            </div>
          )}

          {/* Section 4: Contact Information */}
          {activeStep === 4 && (
            <div className="form-section">
              <h2 className="section-title">Contact Information</h2>
              <div className="form-group">
                <label>Advertiser Name</label>
                <input
                  type="text"
                  name="advertiserName"
                  placeholder="Enter your name"
                  value={formData.advertiserName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Info</label>
                <input
                  type="text"
                  name="contactInfo"
                  placeholder="Enter email or phone"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          {activeStep === 4 && (
            <div className="form-actions">
              <button type="submit" className="submit-btn">Post Listing</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdForm;
