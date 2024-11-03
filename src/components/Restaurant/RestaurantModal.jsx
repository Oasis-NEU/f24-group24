import React from 'react';
import RestaurantChat from './RestaurantChat';

function RestaurantModal({ restaurant, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>

        {/* Restaurant Details */}
        <h2 className="text-2xl font-bold mb-3">{restaurant.name}</h2>
        <p className="text-gray-600 mb-2"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {restaurant.menu.map((menuItem, index) => (
            <li key={index} className="text-gray-800">
              {menuItem.item} - ${menuItem.price.toFixed(2)}
            </li>
          ))}
        </ul>

        {/* Chat Room */}
        <RestaurantChat restaurantId={restaurant.id} />
      </div>
    </div>
  );
}

export default RestaurantModal;
