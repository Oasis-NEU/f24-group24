import React from 'react';

function RestaurantDetails({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <ul>
        {restaurant.menu.map((menuItem, index) => (
          <li key={index}>
            {menuItem.item} - ${menuItem.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Accepts Husky Dollars:</strong> {restaurant.acceptsHuskyDollars ? 'Yes' : 'No'}</p>
      <p><strong>Student Discount:</strong> {restaurant.hasStudentDiscount}</p>
    </div>
  );
}

export default RestaurantDetails;
