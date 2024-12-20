import React, { useCallback, useEffect, useState } from 'react';
import './ProductList.css';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/products");

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [url]);

    const fetchUsers = useCallback(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [url]);

    useEffect(() => {
      fetchUsers();  
    }, [fetchUsers]);

  return (
    <div className='product-list'>
        <h3>Product List</h3>
        <div className='filter-btns'>
            <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=smartphones")}>Smart Phones</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=laptops")}>Laptops</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=fragrances")}>Perfumes</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=skincare")}>Skin Care</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=groceries")}>Groceries</button>
            <button onClick={() => setUrl("http://localhost:3000/products?category=home-decoration")}>Home Decore</button>
        </div>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <strong>{product.title}</strong>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
