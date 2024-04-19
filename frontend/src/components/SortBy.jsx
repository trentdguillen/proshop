import React, { useState } from 'react';

const SortBy = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    handleSort(selectedSort);
  };

  return (
    <div className="mb-3">
      <label htmlFor="sort" className='form-label'>Sort By:</label>
      <select
        id="sort"
        className="form-select form-select-sm"
        style={{width: '100px'}}
        value={sortBy}
        onChange={handleChange}
      >
        <option value="">Sort By...</option>
        <option value="category_asc">Category (A-Z)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default SortBy;
