import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { currentUser, signup, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isLogin && password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      if (isLogin) {
        await login(email, password);
        setSuccess("Logged in successfully!");
        navigate("/restaurants");
      } else {
        await signup(email, password);
        setSuccess("Account created successfully!");
        navigate("/restaurants");
      }
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please provide a valid .edu email address.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // Redirect to the home page after logging out
    } catch (err) {
      setError("Failed to log out. Please try again.");
    }
  };

  // Display logged-in view
  if (currentUser) {
    return (
      <div className="min-h-screen bg-[#f1efef] flex justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-[#ff4439]">
            Account Details
          </h2>
          <p className="text-center text-gray-700">
            You are logged in as{" "}
            <span className="font-semibold text-[#00426c]">
              {currentUser.email}
            </span>
          </p>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-[#ff4439] text-white font-semibold rounded hover:bg-[#d63737] transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  // Display login/sign-up form for non-logged-in users
  return (
    <div className="min-h-screen bg-[#f1efef] flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-[#ff4439]">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        {error && (
          <p className="text-red-600 text-sm text-center bg-red-100 p-2 rounded">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center bg-green-100 p-2 rounded">
            {success}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:ring-[#39b2ff] focus:border-[#39b2ff]"
              placeholder="Enter your .edu email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:ring-[#39b2ff] focus:border-[#39b2ff]"
              placeholder="Enter your password"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-1 p-2 border rounded focus:ring-[#39b2ff] focus:border-[#39b2ff]"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#39b2ff] text-white font-semibold rounded hover:bg-[#00426c] transition duration-300"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <div className="text-sm text-center">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#39b2ff] hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#39b2ff] hover:underline"
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
