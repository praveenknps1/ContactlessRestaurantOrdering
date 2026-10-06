import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 22,
    name: "Classic Fried Chicken",
    price: "₹60",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.kbbCbabTS6vizncZ6ZOoQgHaEJ?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 24,
    name: "Spicy Fried Chicken",
    price: "₹70",
    category: "Main Course",
    image:
      "https://th.bing.com/th?q=Lemon+Chicken+Tenders&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  },
  {
    id: 25,
    name: "Chicken Wings",
    price: "₹80",
    category: "Starters",
    image:
      "https://th.bing.com/th/id/OIP.6YWtFjZKdrETQhSnt4khlQHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 26,
    name: " Chicken Sandwich",
    price: "₹90",
    category: "Main Course",
    image:
      "https://th.bing.com/th?q=Fried+Chicken+Sandwich+Day&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  },
];

const FryedData = () => (
  <CategoryPage
    title="Fried Chicken Menu"
    tagline="Crispy on the outside, juicy on the inside."
    emoji="🍗"
    items={menuData}
  />
);

export default FryedData;
