import React, { useState } from 'react';
import Category from '../Category Component/Category';
import '../Dashboard Component/Dashboard.css';

const Dashboard = () => {
    const [categories, setCategories] = useState([]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {categories.map((category, index) => (
                <div key={index} className="category">
                    <Category category={category} />
                </div>
            ))}
            <button 
                className="add-category-button" 
                onClick={() => setCategories([...categories, { name: `Category ${categories.length + 1}`, widgets: [] }])}
            >
                + Add Category
            </button>
        </div>
    );
};

export default Dashboard;

