import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyListings = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/products/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching user products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, [userId]);

  if (loading) return <p>Loading your listings...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h3>🛍️ My Listings</h3>
      {products.length === 0 ? (
        <p>You have no listed products yet.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id} style={{ marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
              <strong>{product.name}</strong> - ${product.price}
              <br />
              <small>{new Date(product.createdAt).toLocaleString()}</small>
              <br />
              <a href={`/product/${product._id}`} target="_blank" rel="noopener noreferrer">View Product</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyListings;
