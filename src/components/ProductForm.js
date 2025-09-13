import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: '', description: '', category: '', price: '', quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ 
      ...product, 
      price: parseFloat(product.price), 
      quantity: parseInt(product.quantity) 
    });
    setProduct({ name: '', description: '', category: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add Product</h3>
      <input name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
      <input name="price" placeholder="Price" value={product.price} onChange={handleChange} type="number" required />
      <input name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} type="number" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
