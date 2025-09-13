import React from 'react';

const ProductTable = ({ products, updateProduct, deleteProduct }) => {
  const handleUpdate = (product) => {
    const newQuantity = prompt("Enter new quantity:", product.quantity);
    if (newQuantity !== null) {
      updateProduct(product.id, { quantity: parseInt(newQuantity) });
    }
  };

  return (
    <div>
      <h3>Product Inventory</h3>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button onClick={() => handleUpdate(p)}>Update</button>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
