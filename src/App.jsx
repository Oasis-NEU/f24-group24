import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpage";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="/restaurants" element={<RestaurantPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
