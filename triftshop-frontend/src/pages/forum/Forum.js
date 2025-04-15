import React, { useState } from 'react';
import './Forum.css'; // Ensure the CSS file includes the updated styles

const Forum = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="forum-wrapper">
      <h2 className="forum-title">Frequently Asked Questions (FAQ)</h2>
      <div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(1)}
          >
            How do I start using the Trifry Shop app?
            <span
              className={`arrow-icon ${
                activeQuestion === 1 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 1 && (
            <div className="answer">
              Download the app and create your profile. Once you've completed registration, you can browse products, add them to your cart, and place orders easily. If you need additional help, refer to our tutorials section or contact support.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(2)}
          >
            How can I place an order?
            <span
              className={`arrow-icon ${
                activeQuestion === 2 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 2 && (
            <div className="answer">
              Use the search bar to find the desired product, add it to your cart, and click "Order". Follow the prompts to choose your payment method and confirm the order. You'll receive an email with order details and tracking information.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(3)}
          >
            What should I do if I encounter a problem?
            <span
              className={`arrow-icon ${
                activeQuestion === 3 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 3 && (
            <div className="answer">
              If you face any issues, go to the "Contact Us" section in the app. You can send a message directly to our support team. Provide all relevant details about the problem so we can assist you promptly and efficiently.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(4)}
          >
            How can I change my account details?
            <span
              className={`arrow-icon ${
                activeQuestion === 4 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 4 && (
            <div className="answer">
              To update your account details, log in and navigate to "My Account" or "Settings". Here, you can edit your personal information, such as your name, address, or contact details. Don't forget to save your changes. If you encounter difficulties, contact support for guidance.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(5)}
          >
            What payment methods are available?
            <span
              className={`arrow-icon ${
                activeQuestion === 5 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 5 && (
            <div className="answer">
              We offer several payment options to ensure flexibility and security. You can pay using credit/debit cards, digital wallets like PayPal or Google Pay, or bank transfers in some cases. During checkout, you'll see all available options for your convenience.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(6)}
          >
            How can I cancel an order?
            <span
              className={`arrow-icon ${
                activeQuestion === 6 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 6 && (
            <div className="answer">
              To cancel an order, go to the "My Orders" section in the app. Select the order you want to cancel and click "Cancel Order". Note that cancellations are only possible before the order enters the shipping process. For further assistance, contact customer service.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(7)}
          >
            Can I track the status of my order?
            <span
              className={`arrow-icon ${
                activeQuestion === 7 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 7 && (
            <div className="answer">
              Absolutely! You can track your order in real-time by visiting "My Orders" and selecting the specific order. You'll see its current status, like "In Preparation", "Shipped", or "Delivered". If applicable, you can also find a tracking number for courier deliveries.
            </div>
          )}
        </div>
        <div className="question-container">
          <button
            className="question-button"
            onClick={() => toggleQuestion(8)}
          >
            What should I do if I receive a damaged product?
            <span
              className={`arrow-icon ${
                activeQuestion === 8 ? 'rotated' : ''
              }`}
            >
              ➤
            </span>
          </button>
          {activeQuestion === 8 && (
            <div className="answer">
              If a product arrives damaged, we sincerely apologize for the inconvenience. Please take photos of the damage as evidence and contact our customer service through the "Contact Us" section or the provided email. Our team will guide you on replacing the item or processing a refund according to our return policy.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
