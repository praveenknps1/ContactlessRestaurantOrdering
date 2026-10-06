import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 9,
    name: "Chicken Biryani",
    price: "₹120",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    name: "Veg Biryani",
    price: "₹100",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.09w0S6udb6sRvC1qeh3gdQHaE0?w=295&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 11,
    name: "Mutton Biryani",
    price: "₹150",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.uTBYGUmws-MDoYlX-BstNgHaF7?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 12,
    name: "Nizami's Biryani",
    price: "₹140",
    category: "Main Course",
    image:
      "https://th.bing.com/th?q=Pakistani+Food+Biryani&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  },
];

const BiryaniData = () => (
  <CategoryPage
    title="Biryani House"
    tagline="Fragrant spiced rice cooked the traditional way."
    emoji="🍛"
    items={menuData}
  />
);

export default BiryaniData;
