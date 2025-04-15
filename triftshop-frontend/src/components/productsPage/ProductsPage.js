import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductsList = () => {
  const { category, group, subgroup } = useParams(); // ispravni parametri
  const [products, setProducts] = useState([]);
  const BASE_URL = "http://localhost:5000/"; // backend


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/ads/${category}/${group}/${subgroup}`);
        const data = await response.json();
        console.log(data); // Proveri podatke u konzoli
        setProducts(data);
      } catch (error) {
        console.error("Greška prilikom učitavanja proizvoda:", error);
      }
    };
    
    fetchProducts();
  }, [category, group, subgroup]);
  
  

  return (
    <div>
      <h1>{subgroup} Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => {
            const imageUrl = `${BASE_URL}${product.images[0]}`;
            return (
              <div key={product._id} className="product-item">
                <img
                  src={imageUrl}
                  alt={product.itemName}
                  style={{
                    width: "100%",
                    height: "21rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    objectFit: "cover"
                  }}
                />
                <h2>{product.itemName}</h2>
                <p>{product.description}</p>
                <span>{product.price} RSD</span>
              </div>
            );
          })
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
