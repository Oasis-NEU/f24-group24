import React, { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import mockRestaurants from "../../data/mockRestaurants";

function RestaurantList({
  huskyDollarsSelected,
  studentDiscountSelected,
  onRestaurantClick,
}) {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const filterRestaurants = () => {
      let filtered = mockRestaurants;

      // Apply Husky Dollars filter
      if (huskyDollarsSelected) {
        filtered = filtered.filter(
          (restaurant) => restaurant.acceptsHuskyDollars
        );
      }

      // Apply Student Discount filter
      if (studentDiscountSelected) {
        filtered = filtered.filter(
          (restaurant) => restaurant.hasStudentDiscount !== "None"
        );
      }

      setFilteredRestaurants(filtered);
    };

    filterRestaurants();
  }, [huskyDollarsSelected, studentDiscountSelected]);

  return (
    <div className="grid gap-6 w-full max-w-4xl mx-auto">
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex flex-col sm:flex-row items-center sm:items-start p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl bg-white"
            style={{ backgroundColor: "#fbfbfb" }}
            onClick={() => onRestaurantClick(restaurant)}
          >
            {/* Restaurant Image */}
            <div className="flex-shrink-0 w-full sm:w-48 h-48 bg-gray-200 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Basic Restaurant Details */}
            <div className="flex flex-col flex-grow text-center sm:text-left">
              <h3 className="text-xl font-bold">{restaurant.name}</h3>
              <p className="text-gray-600">
                <strong>Cuisine:</strong> {restaurant.cuisine}
              </p>
              <p className="text-gray-600">
                <strong>Accepts Husky Dollars:</strong>{" "}
                {restaurant.acceptsHuskyDollars ? (
                  <span className="text-green-600 font-bold">Yes</span>
                ) : (
                  <span className="text-red-600 font-bold">No</span>
                )}
              </p>
              <p className="text-gray-600">
                <strong>Student Discount:</strong>{" "}
                <span className="text-blue-600">
                  {restaurant.hasStudentDiscount}
                </span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No restaurants found matching the selected criteria.</p>
      )}
    </div>
  );
}

export default RestaurantList;
