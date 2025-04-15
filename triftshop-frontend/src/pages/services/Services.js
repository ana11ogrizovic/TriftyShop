import React from 'react';
import './Services.css'; // Link to the custom styles

const Services = () => {
  return (
    <div className="services-wrapper">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        At TriftyShop, we offer a range of services designed to provide you with a seamless and enjoyable shopping experience. Explore our services below!
      </p>

      {/* First Section of Services */}
      <div className="services-grid">
        <div className="service-card">
          <h2 className="service-title">Personalized Recommendations</h2>
          <p className="service-description">
            Discover products you’ll love with our AI-powered recommendation engine. Shop smarter, not harder.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Fast & Reliable Shipping</h2>
          <p className="service-description">
            Get your favorite items delivered quickly and securely right to your doorstep, with real-time tracking.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">24/7 Customer Support</h2>
          <p className="service-description">
            Need help? Our dedicated support team is here for you at any time of the day or night.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Flexible Payment Options</h2>
          <p className="service-description">
            Pay your way! Choose from multiple payment methods, including cards, wallets, and installment plans.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Easy Returns & Refunds</h2>
          <p className="service-description">
            Shop with confidence! If something’s not right, our hassle-free return and refund policies have you covered.
          </p>
        </div>
      </div>

      {/* Second Section of Services */}
      <br></br>
      <div className="services-grid">
        <div className="service-card">
          <h2 className="service-title">Loyalty Rewards Program</h2>
          <p className="service-description">
            Earn points for every purchase and redeem them for discounts or exclusive perks. It’s our way of saying thank you for shopping with us!
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Gift Cards & Wishlist</h2>
          <p className="service-description">
            Share the joy of shopping with gift cards or create a wishlist to keep track of your must-have items for any occasion.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Real-Time Inventory Updates</h2>
          <p className="service-description">
            Stay updated on product availability with live inventory tracking. Never miss out on your favorite products again!
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Secure Checkout Process</h2>
          <p className="service-description">
            Shop worry-free with our fully encrypted checkout process, designed to protect your personal and payment information.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Seasonal Sales & Discounts</h2>
          <p className="service-description">
            Enjoy exclusive deals and savings during our seasonal sales events. Get the best products at unbeatable prices!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
