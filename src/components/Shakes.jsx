import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 27,
    name: "Chocolate Milkshake",
    price: "₹50",
    category: "Beverage",
    image:
      "https://th.bing.com/th/id/OIP.55AIWvlQmrzcMr1CvbhLMwHaE8?w=208&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 28,
    name: "Strawberry Milkshake",
    price: "₹45",
    category: "Beverage",
    image:
      "https://th.bing.com/th/id/OIP.p1NLOTtbMwjRSd4pGmpFUAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 30,
    name: "Oreo Milkshake",
    price: "₹60",
    category: "Beverage",
    image:
      "https://th.bing.com/th/id/OIP.gcMJee7lBu1amNLuAPDb0QHaJ1?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 31,
    name: "Banana Milkshake",
    price: "₹45",
    category: "Beverage",
    image:
      "https://th.bing.com/th/id/OIP.Y_9obqkZnFQDCHZJm4T1YwHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const ShakesData = () => (
  <CategoryPage
    title="Milkshake Heaven"
    tagline="Creamy, chilled and made to refresh you."
    emoji="🥤"
    items={menuData}
  />
);

export default ShakesData;
