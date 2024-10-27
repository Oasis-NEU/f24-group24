import React from 'react';
import RestaurantChat from './RestaurantChat';

function RestaurantModal({ restaurant, onClose }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div style={{ position: 'relative', margin: '50px auto', padding: '20px', width: '80%', backgroundColor: '#fff', borderRadius: '8px' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
        <h2>{restaurant.name}</h2>
        <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
        <ul>
          {restaurant.menu.map((menuItem, index) => (
            <li key={index}>{menuItem.item} - ${menuItem.price.toFixed(2)}</li>
          ))}
        </ul>
        
        {/* Chat Room */}
        <RestaurantChat restaurantId={restaurant.id} />
      </div>
    </div>
  );
}

export default RestaurantModal;
