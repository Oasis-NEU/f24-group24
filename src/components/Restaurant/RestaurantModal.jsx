import { React, useEffect } from "react";
import RestaurantChat from "./RestaurantChat";
import RestaurantDetails from "./RestaurantDetails";

function RestaurantModal({ restaurant, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl max-h-[95vh] overflow-y-auto"
        style={{
          clipPath: "inset(0 round 0.5rem)", // Ensures rounded corners
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>

        {/* Restaurant Details */}
        <RestaurantDetails restaurant={restaurant} />

        <hr className="border-gray-300 my-6" />

        {/* Chat Room */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Student Thoughts
          </h3>
          <RestaurantChat restaurantId={restaurant.id} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantModal;
