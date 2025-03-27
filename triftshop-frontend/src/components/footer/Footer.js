import React from 'react';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <div style={{ flex: 1, backgroundColor: '#FDF6FA', padding: '2rem 20rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Glavni sadržaj */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '3rem',
        flexWrap: 'wrap',
        paddingTop: '1rem',
        borderTop: '1px solid #ddd'
      }}>
        {/* Contact Us */}
        <div style={{ flex: 1, minWidth: '12.5rem' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#3F3038' }}>Contact Us</h4>
          <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
            <strong>Email:</strong> <a href="mailto:support@thriftyshop.com" style={{ color: '#F361AF', textDecoration: 'none' }}>support@thriftyshop.com</a><br />
            <strong>Phone:</strong> +1 (234) 567-890
          </p>
        </div>

        {/* About Us */}
        <div style={{ flex: 2, minWidth: '18.75rem' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#3F3038' }}>About Us</h4>
          <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
            At Thrifty Shop, we embrace sustainability by offering second-hand treasures for everyone. Explore pre-loved clothing, accessories, and home goods while contributing to a greener planet. Every purchase supports the cycle of reuse! We take pride in carefully curating a collection that combines quality, style, and affordability, ensuring there’s something for everyone.
          </p>
        </div>

        {/* Information */}
        <div style={{ flex: 1, minWidth: '12.5rem' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#3F3038' }}>Information</h4>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2', color: '#333' }}>
            <li><b><a href="/about" style={{ textDecoration: 'none', color: '#F361AF' }}>About Us</a></b></li>
            <li><b><a href="/faq" style={{ textDecoration: 'none', color: '#F361AF' }}>F.A.Q.</a></b></li>
            <li><b><a href="/returns" style={{ textDecoration: 'none', color: '#F361AF' }}>Returns Policy</a></b></li>
            <li><b><a href="/shipping" style={{ textDecoration: 'none', color: '#F361AF' }}>Shipping Information</a></b></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #ddd',
        textAlign: 'center'
      }}>
        <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#3F3038' }}>Subscribe to Our Newsletter</h4>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>
          Stay updated on new arrivals, sales, and exclusive deals!
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '0.3125rem', // 5px u rem
              border: '1px solid #ccc',
              width: '60%',
              marginRight: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#F361AF',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '0.3125rem', // 5px u rem
              cursor: 'pointer',
              fontSize: '1.0625rem' // 17px u rem
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Ikonice društvenih mreža */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#3F3038' }}>Follow Us</h4>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://www.facebook.com" style={{ color: '#F361AF', fontSize: '2.5rem' }}>
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com" style={{ color: '#F361AF', fontSize: '2.5rem' }}>
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.pinterest.com" style={{ color: '#F361AF', fontSize: '2.5rem' }}>
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="https://www.twitter.com" style={{ color: '#F361AF', fontSize: '2.5rem' }}>
            <i className="fa fa-twitter-square"></i>
          </a>
        </div>
      </div>

      {/* Pravna sekcija */}
      <div style={{
        fontSize: '1rem',
        borderTop: '1px solid #ddd',
        paddingTop: '1.5rem',
        color: '#333',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <p>© 2025 Thrifty Shop | Company Number: 11116145 | VAT Number: GB 286 0024 17</p>
        <p>Ecommerce powered by ThriftyShop</p>
      </div>
    </div>
  );
};

export default Footer;
