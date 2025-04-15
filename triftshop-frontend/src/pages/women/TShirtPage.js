import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TShirtPage = () => {
  const { subgroup } = useParams();  // Uzimamo samo subgroup sa parametara

  const [products, setProducts] = useState([]);  // Čuvamo samo filtrirane proizvode
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Učitaj sve proizvode
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ads');  // Učitavamo sve proizvode
        const data = await response.json();
    
        console.log('Fetched products:', data);  // Dodajte ovo da vidite šta API vraća
    
        if (response.ok) {
          // Ako je subgrupa definisana, filtriraj samo na temelju subgrupe
          if (subgroup) {
            const filtered = data.filter(product => product.subgroup?.toLowerCase() === "t-shirt");

            setProducts(filtered);
            console.log('Filtered products:', filtered);  // Dodajte ovo da vidite filtrirane proizvode
          } else {
            // Ako nema subgrupe, prikazujemo sve proizvode
            setProducts(data);
          }
        } else {
          setError('Error fetching products');
        }
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };
    

    fetchProducts();
  }, [subgroup]);  // useEffect se poziva kad god se promeni `subgroup`

  return (
    <div>
      <h1>{subgroup ? `${subgroup} T-Shirt Products` : 'All Products'}</h1>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      <div className="products">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <h3>{product.itemName}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Condition: {product.condition}</p>
              <p>Delivery: {product.deliveryMethod}</p>
              <p>Price Option: {product.priceOption}</p>
              <p>Category: {product.category}</p>
              <p>Advertiser: {product.advertiserName}</p>
              <p>Contact: {product.contactInfo}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TShirtPage;
