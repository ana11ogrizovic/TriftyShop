import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { subCategory } = useParams(); // uzmi subCategory parametar iz URL-a
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Funkcija za dobijanje proizvoda iz baze (pretpostavljamo da imaš API za to)
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
  }, [subCategory]); // Pokreni ponovo svaki put kada se promeni subCategory

  return (
    <div>
      <h1>{subCategory} Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
