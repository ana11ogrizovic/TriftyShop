import React from 'react';
import './ContactUs.css'; // Ensure the CSS file includes the updated styles
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <section className="contact-section">
        <h2 className="section-title">Customer Support</h2>
        <p><strong>Operational Hours:</strong> Monday – Friday, 09:00 – 18:00</p>
        <p><strong>Email:</strong> <a href="mailto:support@triftyshop.com">support@triftyshop.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Shipping & Orders</h2>
        <p>
          For queries related to shipping and orders, please email: 
          <a href="mailto:orders@triftyshop.com"> orders@triftyshop.com</a>.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Payment & Refunds</h2>
        <p><strong>Email:</strong> <a href="mailto:payments@triftyshop.com">payments@triftyshop.com</a></p>
        <p>For refund status, visit our <a href="/refunds" target="_blank" rel="noopener noreferrer">Refunds Portal</a>.</p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Office Address</h2>
        <p><strong>Location:</strong> TriftyShop Headquarters, 123 Commerce Street, Retail City, ShopLand</p>
        <p><strong>Postal Address:</strong> PO Box 456, Retail City, ShopLand 12345</p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="TriftyShop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.495361764784!2d-74.00594138459368!3d40.712775979330404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1611111111111"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Connect with Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter size={30} />
          </a>
        </div>
      </section>

      <footer className="contact-us-footer">
        <p>Need more assistance? Visit our <a href="/faq" target="_blank" rel="noopener noreferrer">FAQ</a> page or use the <a href="/bug-report" target="_blank" rel="noopener noreferrer">Bug Report</a> tool for technical issues.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
