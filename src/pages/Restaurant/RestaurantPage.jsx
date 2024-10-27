import React, { useState } from 'react';
import RestaurantList from '../../components/Restaurant/RestaurantList';
import RestaurantModal from '../../components/Restaurant/RestaurantModal';

function RestaurantPage() {
  const [huskyDollarsSelected, setHuskyDollarsSelected] = useState(false);
  const [studentDiscountSelected, setStudentDiscountSelected] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  // Toggle Husky Dollars filter
  const toggleHuskyDollars = () => {
    setHuskyDollarsSelected(!huskyDollarsSelected);
  };

  // Toggle Student Discount filter
  const toggleStudentDiscount = () => {
    setStudentDiscountSelected(!studentDiscountSelected);
  };

  // Open modal for selected restaurant
  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant({
      ...restaurant,
      id: restaurant.id.toString(), // Ensure ID is a string
    });
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedRestaurant(null);
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
        onRestaurantClick={handleRestaurantClick}
      />

      {/* Display modal if a restaurant is selected */}
      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default RestaurantPage;
