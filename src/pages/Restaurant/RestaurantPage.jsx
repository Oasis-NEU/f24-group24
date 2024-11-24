import React, { useState, useEffect } from "react";
import RestaurantList from "../../components/Restaurant/RestaurantList";
import RestaurantModal from "../../components/Restaurant/RestaurantModal";
import { getUserLocation } from "../../utils/location";
import { haversineDistance } from "../../utils/distance";
import mockRestaurants from "../../data/mockRestaurants";

function RestaurantPage() {
  const [huskyDollarsSelected, setHuskyDollarsSelected] = useState(false);
  const [studentDiscountSelected, setStudentDiscountSelected] = useState(false);
  const [sortByNearest, setSortByNearest] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState(mockRestaurants); // Initial restaurant data
  const [sortedRestaurants, setSortedRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // Fetch user location
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const location = await getUserLocation();
        setUserLocation(location);
      } catch (error) {
        console.error("Error retrieving user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  // Sort and filter restaurants
  useEffect(() => {
    let filtered = [...restaurants];

    if (huskyDollarsSelected) {
      filtered = filtered.filter((r) => r.acceptsHuskyDollars);
    }

    if (studentDiscountSelected) {
      filtered = filtered.filter((r) => r.hasStudentDiscount !== "None");
    }

    if (sortByNearest && userLocation) {
      filtered = filtered
        .map((restaurant) => ({
          ...restaurant,
          distance: haversineDistance(
            userLocation.lat,
            userLocation.lng,
            restaurant.location.lat,
            restaurant.location.lng
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    setSortedRestaurants(filtered);
  }, [
    huskyDollarsSelected,
    studentDiscountSelected,
    sortByNearest,
    userLocation,
    restaurants,
  ]);

  const toggleHuskyDollars = () => setHuskyDollarsSelected((prev) => !prev);
  const toggleStudentDiscount = () =>
    setStudentDiscountSelected((prev) => !prev);
  const toggleSortByNearest = () => setSortByNearest((prev) => !prev);

  const handleRestaurantClick = (restaurant) =>
    setSelectedRestaurant(restaurant);
  const handleCloseModal = () => setSelectedRestaurant(null);

  return (
    <div
      className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-6"
      style={{ backgroundColor: "#f1efef" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-[#00426c]">Restaurants</h1>

      {/* Display User Location */}
      <div className="mb-4 text-[#292423]">
        {userLocation ? (
          <p>
            Your Location:{" "}
            <span className="font-semibold">
              Lat: {userLocation.lat.toFixed(2)}, Lng:{" "}
              {userLocation.lng.toFixed(2)}
            </span>
          </p>
        ) : (
          <p>Fetching your location...</p>
        )}
      </div>

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
        <button
          onClick={toggleSortByNearest}
          className={`px-4 py-2 border rounded transition duration-200 ${
            sortByNearest
              ? "bg-[#39b2ff] text-white border-[#00426c]"
              : "bg-white text-[#00426c] border-black hover:bg-[#9fdaff] hover:border-[#00426c]"
          }`}
        >
          Sort by Nearest
        </button>
      </div>

      {/* Render RestaurantList */}
      <RestaurantList
        restaurants={sortedRestaurants}
        onRestaurantClick={handleRestaurantClick}
        userLocation={userLocation}
      />

      {/* Restaurant Modal */}
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
