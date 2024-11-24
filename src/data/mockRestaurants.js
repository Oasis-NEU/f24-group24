import amelia1 from "../assets/amelia1.jpg";
import amelia2 from "../assets/amelia2.jpg";
import amelia3 from "../assets/amelia3.jpg";
import eljefe1 from "../assets/jefe1.jpg";
import eljefe2 from "../assets/jefe2.jpg";
import eljefe3 from "../assets/jefe3.jpg";
import bostonshwarma1 from "../assets/shwarma1.jpg";
import bostonshwarma2 from "../assets/shwarma2.jpg";
import bostonshwarma3 from "../assets/shwarma3.jpg";
import panera1 from "../assets/panera1.jpg";
import panera2 from "../assets/panera2.jpg";
import panera3 from "../assets/panera3.jpg";
import wollastons1 from "../assets/wolly1.jpg";
import wollastons2 from "../assets/wolly2.jpg";
import wollastons3 from "../assets/wolly3.jpg";
import smallwollastons1 from "../assets/smollys1.jpg";
import smallwollastons2 from "../assets/smollys2.jpg";
import smallwollastons3 from "../assets/smollys3.jpg";
import mamacita1 from "../assets/mamacita1.png";
import mamacita2 from "../assets/mamacita2.jpg";
import mamacita3 from "../assets/mamacita3.png";
import wings1 from "../assets/wingsover1.png";
import wings2 from "../assets/wingsover2.jpg";
import wings3 from "../assets/wingsover3.jpg";
import poke1 from "../assets/poke1.jpg";
import poke2 from "../assets/poke2.jpg";
import poke3 from "../assets/poke3.jpg";
import sprout1 from "../assets/sprout1.jpg";
import sprout2 from "../assets/sprout2.jpg";
import sprout3 from "../assets/sprout3.jpg";


const mockRestaurants = [
  {
    id: 1,
    name: "Amelia's Taqueria",
    cuisine: "Mexican",
    menu: [
      { item: "Chimichanga", price: "" },
      { item: "Burrito", price: "" },
      { item: "Build Your Own Bowl", price: "" },
    ],
    image: amelia1,
    images: [amelia1, amelia2, amelia3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.341392678114865, lng: -71.0876085149623 },
    hours: "Usually 10 AM - 11 PM, Sunday 10 AM - 10 PM",
    googleMapsLink: "https://maps.app.goo.gl/jaBHeVmd8Uwb1YiA9",
  },
  {
    id: 2,
    name: "El Jefe's Taqueria",
    cuisine: "Mexican",
    menu: [
      { item: "Build Your Own Bowl", price: "" },
      { item: "Nutella Empanada", price: "" },
      { item: "Burrito", price: "" },
    ],
    image: eljefe1,
    images: [eljefe1, eljefe2, eljefe3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.342275661357824, lng: -71.08616080858624 },
    hours: "Always 8 AM - 3 AM",
    googleMapsLink: "https://maps.app.goo.gl/HyZj2rm3fgDC8sUC7",
  },
  {
    id: 3,
    name: "Boston Shwarma",
    cuisine: "Middle Eastern",
    menu: [
      { item: "Husky Combo Plate", price: "" },
      { item: "Husky Combo Sandwich", price: "" },
    ],
    image: bostonshwarma1,
    images: [bostonshwarma1, bostonshwarma2, bostonshwarma3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.34118058555729, lng: -71.08770546145126 },
    hours: "Always 10 AM - 11 PM",
    googleMapsLink: "https://maps.app.goo.gl/aBzUysEwYEi75N5X6",
  },
  {
    id: 4,
    name: "Panera Bread",
    cuisine: "American",
    menu: [
      { item: "Italiano Sandwich", price: "" },
      { item: "Chipotle Sandwich", price: "" },
      { item: "Clam Chowder", price: "" },
    ],
    image: panera1,
    images: [panera1, panera2, panera3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.34194516250193, lng: -71.08664987947552 },
    hours: "Usually 6 AM - 10 PM, Sunday 7 AM - 10 PM",
    googleMapsLink: "https://maps.app.goo.gl/5xxB5jNqeKqUj8zu6",
  },
  {
    id: 5,
    name: "Wollaston's",
    cuisine: "Deli",
    menu: [
      { item: "Alpha Delt Melt", price: "" },
      { item: "Phi Gamma Melta", price: "" },
      { item: "Monster Energy", price: "" },
    ],
    image: wollastons1,
    images: [wollastons1, wollastons2, wollastons3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.34052106435441, lng: -71.09027454007543 },
    hours: "Always 7 AM - 1 AM",
    googleMapsLink: "https://maps.app.goo.gl/tszZGdfaqQB2myaY9",
  },
  {
    id: 6,
    name: "Small Wollaston's",
    cuisine: "Deli",
    menu: [
      { item: "Alpha Delt Melt", price: "" },
      { item: "Phi Gamma Melta", price: "" },
      { item: "Monster Energy", price: "" },
    ],
    image: smallwollastons1,
    images: [smallwollastons1, smallwollastons2, smallwollastons3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.33755334781228, lng: -71.09233670677513 },
    hours: "Always 7 AM - 12 AM",
    googleMapsLink: "https://maps.app.goo.gl/jVqphspkSXUqk8z48",
  },
  {
    id: 7,
    name: "Mamacita Authentic Mexican Comida",
    cuisine: "Mexican",
    menu: [
      { item: "Double Decker Taco", price: "" },
      { item: "Enchilada Combo Plate", price: "" },
      { item: "Quesabirria Taco", price: "" },
    ],
    image: mamacita1,
    images: [mamacita1, mamacita2, mamacita3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.34087201212727, lng: -71.08820355886611 },
    hours: "Always 11 AM - 11 PM",
    googleMapsLink: "https://maps.app.goo.gl/p1TNCWgmkoAKLULi7",
  },
  {
    id: 8,
    name: "Wings over Boston",
    cuisine: "American",
    menu: [
      { item: "Husky Combo Meal", price: "" },
      { item: "16 Tender Group Pack", price: "" },
      { item: "10 Wing Meal", price: "" },
    ],
    image: wings1,
    images: [wings1, wings2, wings3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "10% off",
    location: { lat: 42.34098544372129, lng: -71.08809443975181 },
    hours: "Sunday - Thursday 11 AM - 12 PM, Friday & Saturday 11 AM - 2 AM",
    googleMapsLink: "https://maps.app.goo.gl/QATbqzSLV7DcxpEv6",
  },
  {
    id: 9,
    name: "Poke Station and Kitchen",
    cuisine: "Hawaiian",
    menu: [
      { item: "Spicy Sake Bowl", price: "" },
      { item: "Build Your Own Poke Bowl", price: "" },
      { item: "Tempura Burrito", price: "" },
    ],
    image: poke1,
    images: [poke1, poke2, poke3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.3411684910107, lng: -71.08761745963488 },
    hours: "Always 11 AM - 10 PM",
    googleMapsLink: "https://maps.app.goo.gl/RKJ5wxJaJrSgUKrH7",
  },
  {
    id: 10,
    name: "Sprout Mediterranean",
    cuisine: "Mediterranean",
    menu: [
      { item: "Teriyaki Tofu Plate", price: "" },
      { item: "Salmon Plate", price: "" },
      { item: "House Baklava", price: "" },
    ],
    image: sprout1,
    images: [sprout1, sprout2, sprout3],
    acceptsHuskyDollars: true,
    hasStudentDiscount: "None",
    location: { lat: 42.34131861296658, lng: -71.08735645911933 },
    hours: "Always 11 AM - 9 PM",
    googleMapsLink: "https://maps.app.goo.gl/CkSFRCdR6Q7hrfaj7",
  },
];

export default mockRestaurants;
