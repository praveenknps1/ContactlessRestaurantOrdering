import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 1,
    name: "Pizza",
    price: "₹100",
    category: "Main Course",
    image:
      "https://ts3.mm.bing.net/th?id=OIP.ysb5_HgzRt26i-evQmPYhQHaEo&pid=15.1",
  },
  {
    id: 2,
    name: "Pasta",
    price: "₹120",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.6VFRsrYFLmfEdUCRcM6GRwHaEo?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 3,
    name: "Salad",
    price: "₹80",
    category: "Starters",
    image: "https://images.alphacoders.com/104/thumb-1920-1043416.jpg",
  },
  {
    id: 4,
    name: "Margherita",
    price: "₹90",
    category: "Starters",
    image:
      "https://th.bing.com/th/id/OIP.67HufXX0DvcQawQzK7VxgQHaH4?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const Pizzahut = () => (
  <CategoryPage
    title="Pizza Hut Menu"
    tagline="Hot, cheesy and freshly baked - pizzas, pastas and more."
    emoji="🍕"
    items={menuData}
  />
);

export default Pizzahut;
