import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductCard = ({ image, title, description, price, oldPrice }) => {
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
        >
          View
        </button>
        <button style={{
          backgroundColor: '#3F3038',
          color: 'white',
          border: 'none',
          padding: '0.6rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          transition: 'background-color 0.3s'
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#281F25'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3F3038'}
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

const WomenProductsPage = () => {
  const { category, group, subgroup } = useParams();
  const BASE_URL = "http://localhost:5000/";

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchWomenProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ads/women');
      const data = await response.json();
      if (response.ok) {
        setAllProducts(data);
        setProducts(data);
      } else {
        setError('Error fetching women products');
      }
    } catch (err) {
      setError('Error fetching women products');
    }
  };

  
  const fetchMenProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ads/men');
      const data = await response.json();
      if (response.ok) {
        setAllProducts(data);
        setProducts(data);
      } else {
        setError('Error fetching men products');
      }
    } catch (err) {
      setError('Error fetching men products');
    }
  };

  
  useEffect(() => {
    if (category === "Men") {
      fetchMenProducts();  // Poziva proizvode za muškarce
    } else {
      fetchWomenProducts();  // Poziva proizvode za žene
    }
  }, [category]); // Ovaj useEffect se pokreće kad god se promeni kategorija
  

  // Filtriranje proizvoda na osnovu parametara u URL-u
  useEffect(() => {
    const filterProducts = () => {
      if (category && group && subgroup) {
        const filtered = allProducts.filter(product =>
          product.category === category &&
          product.group === group &&
          product.subgroup === subgroup
        );
        setProducts(filtered);
      } else {
        // Ako nema filtriranja, prikazujemo sve proizvode
        setProducts(allProducts);
      }
    };

    filterProducts();
  }, [category, group, subgroup, allProducts]);  // Ovaj useEffect se poziva kad god se promene parametri

  return (
    <div>
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em', justifyContent: 'center', alignItems: 'center' }}>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              image={
                product.images && product.images.length > 0
                  ? `${BASE_URL}${product.images[0]}`
                  : '/images/imgimsg.png'
              }
              // Ako nema slika, koristi defaultnu
              title={product.itemName}
              description={product.description}
              price={product.price}
              oldPrice={product.oldPrice}  // Ako postoji stara cena
            />
          ))
        )}
      </div>
    </div>
  );
  
};

export default WomenProductsPage;
