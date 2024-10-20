import React, { useState } from 'react';
import RestaurantList from '../../components/Restaurant/RestaurantList';

function RestaurantPage() {
  const [huskyDollarsSelected, setHuskyDollarsSelected] = useState(false);
  const [studentDiscountSelected, setStudentDiscountSelected] = useState(false);

  // Toggle Husky Dollars filter
  const toggleHuskyDollars = () => {
    setHuskyDollarsSelected(!huskyDollarsSelected);
  };

  // Toggle Student Discount filter
  const toggleStudentDiscount = () => {
    setStudentDiscountSelected(!studentDiscountSelected);
  };

  return (
    <div>
      <h1>Restaurants</h1>

      {/* Filter Buttons */}
      <div>
        <button
          onClick={toggleHuskyDollars}
          style={{
            backgroundColor: huskyDollarsSelected ? 'orange' : 'white',
            color: 'black',
            border: '1px solid black',
            marginRight: '10px',
          }}
        >
          Husky Dollars
        </button>
        <button
          onClick={toggleStudentDiscount}
          style={{
            backgroundColor: studentDiscountSelected ? 'orange' : 'white',
            color: 'black',
            border: '1px solid black',
          }}
        >
          Student Discount
        </button>
      </div>

      {/* Render the RestaurantList and pass the filter states */}
      <RestaurantList
        huskyDollarsSelected={huskyDollarsSelected}
        studentDiscountSelected={studentDiscountSelected}
      />
    </div>
  );
}

export default RestaurantPage;
