import React from 'react';

const products = [
  { id: 1, name: 'oversized T-SHIRT', price: '$10', image: '/image1.webp',width:'50%',height:'50%' },
  { id: 2, name: 'oversized T-SHIRT', price: '$20', image: '/image2.webp' },
  { id: 3, name: 'oversized T-SHIRT', price: '$30', image: '/image3.webp' },
];

const Products = () => (
  <section style={{padding: '50px 20px',
    textAlign: 'center',
  }}className="products" id="products">
    <h2>Our Products</h2>
    <div style={{display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'}}className="product-list">
      {products.map(product => (
        <div style={{border: '1px solid #ddd',
            padding: '20px',
            margin: '10px',
            width: '200px',
            textAlign: 'center'}}key={product.id} className="product-card">
          <img src={product.image} alt={product.name} height={250} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
