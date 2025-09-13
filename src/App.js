import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const addProduct = (product) => setProducts([...products, { id: Date.now(), ...product }]);
  const updateProduct = (id, updatedProduct) => setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Wings Cafe</h2>
          <nav>
            <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Dashboard</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'active-link' : ''}>Products</NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <h1>Inventory System</h1>
          <Routes>
            <Route path="/" element={<Dashboard products={products} />} />
            <Route path="/products" element={
              <>
                <ProductForm addProduct={addProduct} />
                <ProductTable 
                  products={products} 
                  updateProduct={updateProduct} 
                  deleteProduct={deleteProduct} 
                />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
