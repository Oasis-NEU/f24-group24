import React from "react";

function RestaurantDetails({ restaurant }) {
  return (
    <div className="p-6 rounded-lg bg-white max-w-3xl mx-auto">
      {/* Restaurant Header */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
          {restaurant.name}
        </h2>
        <p className="text-lg text-gray-600">{restaurant.cuisine}</p>
      </div>

      {/* Row of Images */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {restaurant.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${restaurant.name} - ${index + 1}`}
            className="rounded-lg shadow-sm object-cover"
            style={{ height: "150px", width: "200px" }}
          />
        ))}
      </div>

      {/* Restaurant Information */}
      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          <strong>Accepts Dining Dollars:</strong>{" "}
          {restaurant.acceptsHuskyDollars ? (
            <span className="text-green-600 font-bold">Yes</span>
          ) : (
            <span className="text-red-600 font-bold">No</span>
          )}
        </p>
        <p className="text-gray-700">
          <strong>Student Discount:</strong>{" "}
          <span className="text-blue-600">{restaurant.hasStudentDiscount}</span>
        </p>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Menu Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Popular Items
        </h3>
        <ul className="list-disc pl-5 space-y-3">
          {restaurant.menu.map((menuItem, index) => (
            <li key={index} className="text-gray-800">
              <span className="font-semibold">{menuItem.item}</span> - $
              {menuItem.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantDetails;
