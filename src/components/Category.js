import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api.js';
import '../styles/category.css';

const Category = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCategoryAndProducts = async () => {
            try {
                const categoryResponse = await api.get(`/categories/${categoryId}`);
                setCategory(categoryResponse.data);

                const productResponse = await api.get(`/products/category/${categoryId}`);
                setProducts(productResponse.data);
            } catch (error) {
                console.error('Error fetching products by category: ', error);
            }
        };
        fetchCategoryAndProducts();
    }, [categoryId]);

    return (
        <div>
            <h1 className="category-title">{category.name}</h1>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            {/* Display product details */}
                            <div>
                                <strong>Name:</strong> {product.name}
                            </div>
                            <div>
                                <strong>Price:</strong> ${product.price}
                            </div>
                            {/* ... Display other product details ... */}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Category;
