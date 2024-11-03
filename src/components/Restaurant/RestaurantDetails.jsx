import React from 'react';

function RestaurantDetails({ restaurant }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
      <p className="text-gray-600 mb-2"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        {restaurant.menu.map((menuItem, index) => (
          <li key={index} className="text-gray-800">
            {menuItem.item} - ${menuItem.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="text-gray-700"><strong>Accepts Husky Dollars:</strong> {restaurant.acceptsHuskyDollars ? 'Yes' : 'No'}</p>
      <p className="text-gray-700"><strong>Student Discount:</strong> {restaurant.hasStudentDiscount}</p>
    </div>
  );
}

export default RestaurantDetails;
