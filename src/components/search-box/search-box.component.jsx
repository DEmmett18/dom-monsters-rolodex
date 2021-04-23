import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ onSearchChange, placeholder }) => (
    <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}/>
);