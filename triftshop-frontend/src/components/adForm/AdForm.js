import React, { useState } from "react";
import "./AdForm.css"; // CSS for styles

const AdForm = () => {
    const [formData, setFormData] = useState({
        images: [],
        itemName: "",
        price: "",
        priceOption: "negotiable", // New field for price dropdown
        description: "",
        condition: "new",
        deliveryMethod: "pickup",
        category: "",
        advertiserName: "",
        contactInfo: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };

    return (
        <div className="page-container">
            <form className="large-form" onSubmit={handleSubmit}>
                {/* Image Upload */}
                <div className="form-group">
  <label>Add Images</label>
  <div className="upload-box" onClick={() => document.getElementById('file-input').click()}>
    <span className="upload-icon">+</span>
    <span className="upload-text">Click here to upload images or drag and drop them into this box</span>
  </div>
  <input
    id="file-input"
    type="file"
    multiple
    accept="image/*"
    onChange={handleFileUpload}
    style={{ display: "none" }} // Hide the default input element
  />
</div>


                {/* Item Name */}
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

                {/* Price with Dropdown */}
                <div className="form-group price-group">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={handleInputChange}
                        style={{ width: "60%" }} // Adjusted width for price input
                    />
                    <select
                        name="priceOption"
                        value={formData.priceOption}
                        onChange={handleInputChange}
                        style={{ width: "35%", marginLeft: "5%" }} // Adjusted width and margin for dropdown
                    >
                        <option value="free">Free</option>
                        <option value="negotiable">Negotiable</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="5"
                        placeholder="Enter a description of the item"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Condition and Delivery Method */}
                <div className="form-row">
                    <div className="form-group" style={{ width: "48%" }}>
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
                    <div className="form-group" style={{ width: "48%" }}>
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

                {/* Category */}
                <div className="form-group" style={{ width: "48%" }}>
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Advertiser Name and Contact Information */}
                <div className="form-row">
                    <div className="form-group" style={{ width: "48%" }}>
                        <label>Advertiser Name</label>
                        <input
                            type="text"
                            name="advertiserName"
                            placeholder="Enter your name"
                            value={formData.advertiserName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group" style={{ width: "48%" }}>
                        <label>Contact Information</label>
                        <input
                            type="text"
                            name="contactInfo"
                            placeholder="Enter email or phone"
                            value={formData.contactInfo}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                    Post Your Ad
                </button>
            </form>
        </div>
    );
};

export default AdForm;
