import React from 'react';
import './ContactUs.css'; // Ensure the CSS file includes the updated styles

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        We're here to assist you with any inquiries, issues, or feedback related to your shopping experience. Get in touch through the details below or use the provided form for convenience.
      </p>

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
        <p>For refund status, visit our <a href="/refunds" target="_blank">Refunds Portal</a>.</p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Office Address</h2>
        <p><strong>Location:</strong> TriftyShop Headquarters, 123 Commerce Street, Retail City, ShopLand</p>
        <p><strong>Postal Address:</strong> PO Box 456, Retail City, ShopLand 12345</p>
      </section>

      <footer className="contact-us-footer">
        <p>Need more assistance? Visit our <a href="/faq" target="_blank">FAQ</a> page or use the <a href="/bug-report" target="_blank">Bug Report</a> tool for technical issues.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
