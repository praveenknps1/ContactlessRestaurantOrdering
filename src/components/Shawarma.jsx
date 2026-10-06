import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 32,
    name: "Chicken Shawarma",
    price: "₹70",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.Ca9pWDuCKYqHi_SfMZlzZAHaFE?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 33,
    name: "Falafel Shawarma",
    price: "₹60",
    category: "Vegetarian",
    image:
      "https://th.bing.com/th/id/OIP.VTAbb1n_kYlK6_yGceukOQHaEo?w=285&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 34,
    name: "Mixed Shawarma ",
    price: "₹100",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.hOAYKYT77uGIwPgUg_ZZyQHaFf?w=252&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 35,
    name: "Shawarma Wrap",
    price: "₹50",
    category: "Snacks",
    image:
      "https://th.bing.com/th/id/OIP.gw22Q3RpRfEgb8LeOHbPogHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const ShawarmaData = () => (
  <CategoryPage
    title="Shawarma Hut"
    tagline="Seasoned meat, fresh veggies and sauces in a warm wrap."
    emoji="🌯"
    items={menuData}
  />
);

export default ShawarmaData;
