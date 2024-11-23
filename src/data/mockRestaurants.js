import mock from "../assets/lego_logo.png";

const mockRestaurants = [
  {
    id: 1,
    name: "The Noodle Nook",
    cuisine: "Asian Fusion",
    menu: [
      { item: "Spicy Ramen Bowl", price: 10.99 },
      { item: "Veggie Stir-Fry Udon", price: 9.99 },
      { item: "Pork Belly Bao", price: 7.49 },
    ],
    image: mock,
    images: [mock, mock, mock],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "10% off with student ID",
    location: { lat: 42.3394, lng: -71.0884 }, // Near Northeastern University
  },
  {
    id: 2,
    name: "Campus Pizza Palace",
    cuisine: "Italian/Pizza",
    menu: [
      { item: "Margherita Pizza", price: 12.99 },
      { item: "BBQ Chicken Pizza", price: 14.99 },
      { item: "Garlic Knots (6)", price: 5.99 },
    ],
    acceptsHuskyDollars: false,
    hasStudentDiscount: "15% off all pizzas",
    location: { lat: 42.3401, lng: -71.0923 }, // Nearby
  },
  {
    id: 3,
    name: "The Burger Bunker",
    cuisine: "American/Grill",
    menu: [
      { item: "Double Cheeseburger", price: 9.99 },
      { item: "Crispy Chicken Sandwich", price: 8.99 },
      { item: "Loaded Bacon Fries", price: 6.99 },
    ],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.3412, lng: -71.0938 }, // Nearby
  },
  {
    id: 4,
    name: "Green & Go Salad Bar",
    cuisine: "Healthy/Salads",
    menu: [
      { item: "Build-Your-Own Salad", price: 9.99 },
      { item: "Kale Caesar Salad", price: 8.99 },
      { item: "Quinoa Power Bowl", price: 10.99 },
    ],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "5% off",
    location: { lat: 42.3399, lng: -71.0867 }, // Nearby
  },
  {
    id: 5,
    name: "Sushi Spot",
    cuisine: "Japanese/Sushi",
    menu: [
      { item: "California Roll", price: 7.99 },
      { item: "Spicy Tuna Roll", price: 8.99 },
      { item: "Tempura Shrimp Roll", price: 9.49 },
    ],
    acceptsHuskyDollars: false,
    hasStudentDiscount: "10% off rolls",
    location: { lat: 42.3388, lng: -71.0855 }, // Nearby
  },
  {
    id: 6,
    name: "Taco Truck Express",
    cuisine: "Mexican/Street Food",
    menu: [
      { item: "Beef Tacos (3)", price: 8.49 },
      { item: "Chicken Quesadilla", price: 7.99 },
      { item: "Loaded Nachos", price: 9.99 },
    ],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.3415, lng: -71.0873 }, // Nearby
  },
  {
    id: 7,
    name: "Pasta Perfection",
    cuisine: "Italian",
    menu: [
      { item: "Fettuccine Alfredo", price: 11.99 },
      { item: "Spaghetti Bolognese", price: 12.99 },
      { item: "Garlic Bread", price: 3.99 },
    ],
    acceptsHuskyDollars: false,
    hasStudentDiscount: "20% off with student ID",
    location: { lat: 42.3420, lng: -71.0845 }, // Nearby
  },
  {
    id: 8,
    name: "Smoothie Shack",
    cuisine: "Smoothies/Healthy Drinks",
    menu: [
      { item: "Berry Blast Smoothie", price: 6.49 },
      { item: "Green Detox Smoothie", price: 7.49 },
      { item: "Tropical Mango Smoothie", price: 6.99 },
    ],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.3375, lng: -71.0882 }, // Nearby
  },
  {
    id: 9,
    name: "BBQ Pit Stop",
    cuisine: "American/BBQ",
    menu: [
      { item: "Pulled Pork Sandwich", price: 9.99 },
      { item: "Smoked Brisket Plate", price: 13.99 },
      { item: "BBQ Ribs (Half Rack)", price: 14.99 },
    ],
    acceptsHuskyDollars: false,
    hasStudentDiscount: "10% off orders over $20",
    location: { lat: 42.3368, lng: -71.0903 }, // Nearby
  },
  {
    id: 10,
    name: "Café Latte",
    cuisine: "Coffee/Bakery",
    menu: [
      { item: "Iced Latte", price: 4.99 },
      { item: "Avocado Toast", price: 5.99 },
      { item: "Blueberry Muffin", price: 3.49 },
    ],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "5% off drinks",
    location: { lat: 42.3383, lng: -71.0870 }, // Nearby
  },
];

export default mockRestaurants;
