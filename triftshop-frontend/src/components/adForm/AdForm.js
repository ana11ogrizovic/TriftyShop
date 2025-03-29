import React, { useState } from "react";
import "./AdForm.css"; // CSS for styles

const AdForm = () => {
    const [activeStep, setActiveStep] = useState(1); // Pratimo koji je korak aktivan

    const [formData, setFormData] = useState({
        images: [],
        itemName: "",
        price: "",
        priceOption: "negotiable",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
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
                    {activeStep === 1 && (
                        <div className="form-section">
                            <h2 className="section-title">Add Images</h2>
                            <div className="form-group">
                                <div className="upload-container">
                                    {formData.images.map((img, index) => (
                                        <div key={index} className="image-preview">
                                            <img src={URL.createObjectURL(img)} alt={`preview-${index}`} />
                                        </div>
                                    ))}
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
