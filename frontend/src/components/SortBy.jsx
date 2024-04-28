import React from 'react';
import { useNavigate } from 'react-router-dom';

const SortBy = () => {
  const navigate = useNavigate();

  const handleSortByPrice = (event) => {
    const selectedRoute = event.target.value;

    navigate(selectedRoute);
  };

  return (
    <div>
      <label htmlFor="sortByPrice"  style={{marginRight: '10px'}} >Sort</label>
      <select id="sortByPrice"onChange={handleSortByPrice}>
        <option value="/">Sort by...</option>
        <option value="/sortprice">Sort by price</option>
        <option value="/sortcategory">Sort by category</option>
      </select>
    </div>
  );
};

export default SortBy;