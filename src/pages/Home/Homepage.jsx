import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";

const Homepage = () => {
  return (
    <>
      <div>Homepage</div>
      <Welcome />
      <Link to="/restaurants">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Explore Restaurants
        </button>
      </Link>
    </>
  );
};

export default Homepage;
