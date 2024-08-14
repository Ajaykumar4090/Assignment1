import React, { useState } from 'react';
import '../Dashboard Component/Dashboard.css'
const SearchWidgets = ({ widgets, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className='search'>
            <input className='search-bar'
                type="text" 
                placeholder="Search Widgets" 
                value={searchTerm} 
                onChange={handleSearch} 
            />
        </div>
    );
};

export default SearchWidgets;
