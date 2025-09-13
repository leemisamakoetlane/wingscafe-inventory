import React from 'react';

const Dashboard = ({ products }) => {
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, p) => acc + p.quantity, 0);
  const lowStock = products.filter(p => p.quantity < 10).length;

  return (
    <div className="dashboard">
      <div>
        <h3>Total Products</h3>
        <p>{totalProducts}</p>
      </div>
      <div>
        <h3>Total Stock</h3>
        <p>{totalStock}</p>
      </div>
      <div>
        <h3>Low Stock Alerts</h3>
        <p>{lowStock}</p>
      </div>
    </div>
  );
};

export default Dashboard;
