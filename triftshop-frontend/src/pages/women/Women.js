import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ProductCard = ({ product, onView, onContactSeller }) => (
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
    <img src={product.image} alt={product.title} style={{
      width: '100%',
      height: '21rem',
      borderRadius: '8px',
      marginBottom: '1rem'
    }} />
    <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem' }}>{product.title}</h3>
    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textAlign: 'center' }}>{product.description}</p>
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      marginBottom: '1rem',
      fontSize: '1rem'
    }}>
      <span style={{ color: '#F361AF', fontWeight: 'bold', fontSize: '1.2rem' }}>{product.price} $</span>
      {product.oldPrice && <span style={{ color: '#888', textDecoration: 'line-through', marginLeft: '0.9rem' }}>{product.oldPrice} $</span>}
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


const WomenProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [productName, setProductName] = useState('');
  const [selectedSubgroup, setSelectedSubgroup] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortOrder, setSortOrder] = useState('');
  const [condition, setCondition] = useState('');
  const BASE_URL = "http://localhost:5000/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [originalProducts, setOriginalProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);





  const handleSendMessage = async () => {
    const senderId = localStorage.getItem('userId');
    const receiverId = selectedProduct?.userId;
    const token = localStorage.getItem('token');

    console.log('🔑 Token from localStorage:', token); // 🛠 Debugging tokena

    if (!message.trim()) return alert('Please enter a message.');
    if (!senderId || !receiverId) return alert('Sender or receiver not found.');
    if (!token) return alert('You must be logged in.');

    try {
      console.log('📩 Sending message with:', { senderId, receiverId, productId: selectedProduct._id, content: message });

      const response = await axios.post(
        'http://localhost:5000/api/messages/sendMessage',
        { senderId, receiverId, productId: selectedProduct._id, content: message },
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
      );

      console.log('✅ Message sent successfully:', response.data);
      setIsMessageModalOpen(false);
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('🔥 Request Error:', error.response?.data || error);
      alert('Something went wrong. Try again.');
    }
  };






  const handleViewProduct = (product) => {
    console.log('Selected product:', product); // Debug the product data
    setIsMessageModalOpen(false); // Zatvori modal za Contact Seller
    setSelectedProduct(product);  // Postavi selektovani proizvod
    setIsModalOpen(true);         // Otvori modal za proizvod
  };

  const handleContactSeller = (product) => {
    console.log('Selected product:', product); // 👈 Dodaj ovo

    const userId = localStorage.getItem('userId');
    if (!userId) {
      return alert('You must be logged in to contact the seller');
    }

    setIsModalOpen(false);
    setSelectedProduct(product);
    setIsMessageModalOpen(true);
  };




  const closeModal = () => setSelectedProduct(null); // Close modal

  useEffect(() => {
    const fetchWomenProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/ads/women`);
        const data = await response.json();
        if (response.ok) {
          setOriginalProducts(data); // Čuvaj originalne
          setProducts(data);         // Prikazuj filtrirane        
        } else {
          setError('Error fetching products');
        }
      } catch {
        setError('Error fetching products');
      }
    };

    fetchWomenProduct();
  }, []);

  useEffect(() => {
    let filtered = [...originalProducts];


    if (productName)
      filtered = filtered.filter(p => p.itemName.toLowerCase().includes(productName.toLowerCase()));

    if (selectedSubgroup)
      filtered = filtered.filter(p => p.subgroup === selectedSubgroup);

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortOrder === 'asc')
      filtered.sort((a, b) => a.price - b.price);
    else if (sortOrder === 'desc')
      filtered.sort((a, b) => b.price - a.price);

    if (condition) filtered = filtered.filter(p => p.condition === condition);

    setProducts(filtered);
  }, [productName, selectedSubgroup, priceRange, sortOrder, condition]);



  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      {/* Filters Sidebar */}
      <aside style={{
        width: '15%',
        padding: '1rem',
        backgroundColor: '#fdf6fa',
        borderRadius: '8px',
        marginLeft: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          marginBottom: '1rem',
          borderBottom: '1px solid #ccc',
          paddingBottom: '0.5rem'
        }}>Filters</h3>


        <div style={{ marginBottom: '1.2rem' }}>
          <label>Select Subgroup</label>
          <select value={selectedSubgroup} onChange={(e) => setSelectedSubgroup(e.target.value)} style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#fff'
          }}>
            <option value="">All</option>
            <option value="t-shirt">Men's T-Shirt</option>
            <option value="Suits">Suits</option>
            <option value="Pants">Pants</option>
            <option value="Jackets">Jackets</option>
            <option value="Sweaters">Sweaters</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onInput={(e) => setPriceRange([0, parseInt(e.target.value)])}
            style={{ width: '100%' }}
          />
          <span>{priceRange[0]} - {priceRange[1]} $</span>
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label>Sort by Price</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label>Condition</label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option value="">All</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>

        {/* Reset Button */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={() => {
              setProductName('');
              setSelectedSubgroup('');
              setPriceRange([0, 100]);
              setSortOrder('');
              setCondition('');
            }}
            style={{
              backgroundColor: '#F361AF',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'background-color 0.3s',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            Reset Filters
          </button>
        </div>
      </aside>

      {/* Products Section */}
      <main style={{ flex: 1, padding: '1rem' }}>
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
                onView={handleViewProduct} // Kada korisnik klikne na View, otvori modal za proizvod
                onContactSeller={handleContactSeller} // Kada korisnik klikne na Contact Seller, otvori modal za kontakt
              />


            ))
          )}
        </div>
      </main>
      {isModalOpen && selectedProduct && (
        <div style={{ ...styles.modalOverlay, animation: 'fadeIn 0.3s' }} onClick={closeModal}>
          <div style={{ ...styles.modalUrbanContainer }} onClick={(e) => e.stopPropagation()}>
            {/* Image and Info Layout */}
            <div style={styles.urbanContentWrapper}>
              {/* Left: Image */}
              <div style={styles.urbanImageSection}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.itemName}
                  style={styles.urbanImage}
                />
              </div>

              {/* Right: Details */}
              <div style={styles.urbanTextSection}>
                <h2 style={styles.urbanTitle}>{selectedProduct.itemName}</h2>

                <div style={styles.badgeRow}>
                  <span style={styles.badge}>{selectedProduct.condition}</span>
                  <span style={styles.badge}>{selectedProduct.category}</span>
                  <span style={styles.badge}>{selectedProduct.group} › {selectedProduct.subgroup}</span>
                </div>

                <p style={styles.urbanDescription}>{selectedProduct.description}</p>

                <div style={styles.priceSection}>
                  <span style={styles.currentPrice}>{selectedProduct.price} $</span>
                  {selectedProduct.oldPrice && (
                    <span style={styles.oldPrice}>{selectedProduct.oldPrice} $</span>
                  )}
                  <span style={styles.priceType}>{selectedProduct.priceOption || 'Fixed'}</span>
                </div>

                {/* Seller Info */}
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
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#F361AF',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  modalUrbanContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    color: '#f0f0f0',
    maxWidth: '850px',
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
    overflow: 'hidden',
    animation: 'popUp 0.3s ease-out'
  },

  urbanContentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '2rem',
    padding: '2rem'
  },

  urbanImageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    borderRadius: '8px'
  },

  urbanImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  },

  urbanTextSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  urbanTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#F361AF'
  },

  urbanDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '1rem 0',
    color: '#ccc'
  },

  badgeRow: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },

  badge: {
    backgroundColor: '#F361AF',
    color: '#fff',
    padding: '0.3rem 0.6rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    textTransform: 'capitalize'
  },

  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.2rem'
  },

  currentPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#00e676'
  },

  oldPrice: {
    fontSize: '1rem',
    textDecoration: 'line-through',
    color: '#888'
  },

  priceType: {
    fontSize: '0.9rem',
    color: '#aaa'
  },

  sellerInfoBox: {
    backgroundColor: '#2a2a2a',
    borderRadius: '6px',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  modalMessageBox: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '10px',
    padding: '2rem',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
    animation: 'fadeIn 0.3s ease-in-out',
    position: 'relative'  // 👈 dodaj ovo
  }



};

export default WomenProduct;
