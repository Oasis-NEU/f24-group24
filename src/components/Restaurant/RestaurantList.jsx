import React, { useEffect, useState } from 'react';
import RestaurantDetails from './RestaurantDetails';
import mockRestaurants from '../../data/mockRestaurants';

function RestaurantList({ huskyDollarsSelected, studentDiscountSelected }) {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
    useEffect(() => {
        const filterRestaurants = () => {
          let filtered = mockRestaurants;
    
          // Apply Husky Dollars filter
          if (huskyDollarsSelected) {
            filtered = filtered.filter(restaurant => restaurant.acceptsHuskyDollars);
          }
    
          // Apply Student Discount filter
          if (studentDiscountSelected) {
            filtered = filtered.filter(restaurant => restaurant.hasStudentDiscount !== 'None');
          }
    
          setFilteredRestaurants(filtered);
        };
    
        filterRestaurants();
      }, [huskyDollarsSelected, studentDiscountSelected]);
    
      return (
        <div>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantDetails key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>No restaurants found matching the selected criteria.</p>
          )}
        </div>
      );
    }
    
    export default RestaurantList;