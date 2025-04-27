import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000/'; // Pretpostavljam da ti je ovako postavljen backend URL

// Komponenta za prikaz pojedinačnog proizvoda
const ProductCard = ({ product, onView, onContactSeller }) => {
  const { image, title, description, price, oldPrice } = product;

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '1rem',
      width: '15rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      margin: '0.5rem',
      textAlign: 'center'
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={image} alt={title} style={{
        width: '100%',
        height: '21rem',
        borderRadius: '8px',
        marginBottom: '1rem'
      }} />

      <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>{title}</h3>

      <p style={{
        fontSize: '0.9rem',
        color: '#666',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        {description}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginBottom: '1rem',
        fontSize: '1rem'
      }}>
        <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>{price} $</span>
        {oldPrice && <span style={{ color: '#888', textDecoration: 'line-through', marginLeft: '0.9rem' }}>{oldPrice} $</span>}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button style={{
          backgroundColor: '#F361AF',
          color: 'white',
          border: 'none',
          padding: '0.6rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          transition: 'background-color 0.3s'
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#E04B99'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#F361AF'}
          onClick={() => onView(product)}
        >
          View & Contact
        </button>
      </div>
    </div>
  );
};

const ProductsBySubgroupPage = () => {
  const { category: paramCategory, group: paramGroup, subgroup } = useParams();
  const category = paramCategory || "Women"; // Default vrednosti
  const group = paramGroup || "Clothing";

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ads');
      const data = await response.json();

      if (response.ok) {
        const filtered = data.filter(
          product =>
            product.category?.toLowerCase() === category?.toLowerCase() &&
            product.group?.toLowerCase().replace(/&/g, 'and') === group?.toLowerCase() &&
            product.subgroup?.toLowerCase() === subgroup?.toLowerCase()
        );

        setProducts(filtered);
      } else {
        setError('Error loading products');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, group, subgroup]);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsMessageModalOpen(false);
  };

  const handleContactSeller = (product) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      return alert('You must be logged in to contact the seller');
    }

    setIsModalOpen(false);
    setSelectedProduct(product);
    setIsMessageModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsMessageModalOpen(false);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2em',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={{
                ...product,
                image: product.images?.[0] ? `${BASE_URL}${product.images[0]}` : '/images/imgimsg.png',
                title: product.itemName,
                description: product.description,
                price: product.price,
                oldPrice: product.oldPrice,
              }}
              onView={handleViewProduct}
              onContactSeller={handleContactSeller}
            />
          ))
        )}
      </div>

      {isModalOpen && selectedProduct && (
        <div style={{ ...styles.modalOverlay, animation: 'fadeIn 0.3s' }} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalContentWrapper}>
              <div style={styles.modalImageSection}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.itemName}
                  style={styles.modalImage}
                />
              </div>

              <div style={styles.modalTextSection}>
                <h2 style={styles.modalTitle}>{selectedProduct.itemName}</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <span style={styles.badge}>{selectedProduct.condition}</span>
                  <span style={styles.badge}>{selectedProduct.category}</span>
                  <span style={styles.badge}>{selectedProduct.group} › {selectedProduct.subgroup}</span>
                </div>

                <p style={styles.modalParagraph}>{selectedProduct.description}</p>

                <div style={styles.priceSection}>
                  <span style={styles.currentPrice}>{selectedProduct.price} $</span>
                  {selectedProduct.oldPrice && (
                    <span style={styles.oldPrice}>{selectedProduct.oldPrice} $</span>
                  )}
                  <span style={styles.priceType}>{selectedProduct.priceOption || 'Fixed'}</span>
                </div>

                <div style={styles.sellerInfoBox}>
                  <p><strong>Seller:</strong> {selectedProduct.advertiserName}</p>
                  <p><strong>Contact:</strong> {selectedProduct.contactInfo}</p>
                  <p><strong>Delivery:</strong> {selectedProduct.deliveryMethod}</p>
                  <p><strong>Phone:</strong> {selectedProduct.phone}</p>
                </div>
              </div>
            </div>

            <button style={styles.closeButton} onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    maxWidth: '900px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  },
  modalContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  modalImageSection: {
    flex: 1.2,
    backgroundColor: '#f8f8f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  },
  modalImage: {
    width: '100%',
    height: '100%',
    maxWidth: '250px',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  modalTextSection: {
    flex: 2,
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  modalTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  modalParagraph: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '0.7rem',
    lineHeight: '1.6'
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#f1f1f1',
    color: '#333',
    padding: '0.3rem 0.7rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    marginRight: '0.5rem'
  },
  priceSection: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  currentPrice: {
    color: '#F361AF',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginRight: '1rem'
  },
  oldPrice: {
    color: '#888',
    textDecoration: 'line-through',
    marginRight: '1rem'
  },
  priceType: {
    backgroundColor: '#E0E0E0',
    borderRadius: '5px',
    padding: '0.3rem 0.6rem',
    fontSize: '0.8rem'
  },
  sellerInfoBox: {
    marginTop: '1.5rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px'
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#F361AF',
    color: 'white',
    border: 'none',
    padding: '0.5rem 0.8rem',
    borderRadius: '50%',
    fontSize: '1.2rem',
    cursor: 'pointer'
  }
};

export default ProductsBySubgroupPage;
