import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 5,
    name: "Espresso",
    price: " ₹30",
    category: "Beverage",
    image:
      "https://th.bing.com/th/id/OIP.gzBuoJWcQj9EuHkrrimCigHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 6,
    name: "Sandwich",
    price: "₹50",
    category: "Food",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.ohrluOUVy__pXVpyJKAIfAHaEy?w=304&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 7,
    name: "Muffin",
    price: "₹20",
    category: "Pastry",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.pagLLG608RxTB-L5sXVNBQHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    name: "Latte",
    price: "₹35",
    category: "Beverage",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.6Lb2xzBM3B6maFHPDwhw5AHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const CafeData = () => (
  <CategoryPage
    title="Coffee Cafe Menu"
    tagline="Rich aroma, bold flavour - freshly brewed coffee and bakes."
    emoji="☕"
    items={menuData}
  />
);

export default CafeData;
