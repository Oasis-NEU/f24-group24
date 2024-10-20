import React, { useState } from 'react';
import RestaurantList from './RestaurantList';

function RestaurantFilter() {
  const [acceptsHuskyDollars, setAcceptsHuskyDollars] = useState(false);
  const [hasStudentDiscount, setHasStudentDiscount] = useState(false);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'acceptsHuskyDollars') setAcceptsHuskyDollars(checked);
    if (name === 'hasStudentDiscount') setHasStudentDiscount(checked);
  };

  return (
    <div>
      <h3>Filter Restaurants</h3>
      <label>
        <input
          type="checkbox"
          name="acceptsHuskyDollars"
          onChange={handleFilterChange}
        />
        Accepts Husky Dollars
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="hasStudentDiscount"
          onChange={handleFilterChange}
        />
        Has Student Discount
      </label>

      <RestaurantList
        acceptsHuskyDollars={acceptsHuskyDollars}
        hasStudentDiscount={hasStudentDiscount}
      />
    </div>
  );
}

export default RestaurantFilter;
