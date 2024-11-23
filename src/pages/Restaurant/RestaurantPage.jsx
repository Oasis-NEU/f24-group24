import React, { useState } from "react";
import RestaurantList from "../../components/Restaurant/RestaurantList";
import RestaurantModal from "../../components/Restaurant/RestaurantModal";

function RestaurantPage() {
  const [huskyDollarsSelected, setHuskyDollarsSelected] = useState(false);
  const [studentDiscountSelected, setStudentDiscountSelected] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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
    <div
      className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-6"
      style={{ backgroundColor: "#f1efef" }}
    >
      <h1 className="text-4xl font-bold mb-6">Restaurants</h1>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={toggleHuskyDollars}
          className={`px-4 py-2 border rounded transition duration-200 ${
            huskyDollarsSelected
              ? "bg-[#39b2ff] text-white border-[#00426c]"
              : "bg-white text-[#00426c] border-black hover:bg-[#9fdaff] hover:border-[#00426c]"
          }`}
        >
          Dining Dollars
        </button>
        <button
          onClick={toggleStudentDiscount}
          className={`px-4 py-2 border rounded transition duration-200 ${
            studentDiscountSelected
              ? "bg-[#39b2ff] text-white border-[#00426c]"
              : "bg-white text-[#00426c] border-black hover:bg-[#9fdaff] hover:border-[#00426c]"
          }`}
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
