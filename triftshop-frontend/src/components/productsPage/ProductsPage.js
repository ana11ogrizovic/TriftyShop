import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { subCategory } = useParams();
  const [products, setProducts] = useState([]);
  const BASE_URL = "http://localhost:5000/"; // Tvoj backend URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/ads/${subCategory}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Greška prilikom učitavanja proizvoda:", error);
      }
    };

    fetchProducts();
  }, [subCategory]);

  return (
    <div>
      <h1>{subCategory} Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => {
            const imageUrl = `${BASE_URL}${product.images[0]}`;
            console.log("Image URL:", imageUrl); // Ovde vidiš tačnu putanju

            return (
              <div key={product.id} className="product-item">
                <img
                  src={imageUrl}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "21rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    objectFit: "cover"
                  }}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>{product.price}</span>
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

export default ProductsPage;
