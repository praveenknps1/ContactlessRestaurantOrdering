import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 13,
    name: "Caesar Salad",
    price: "₹100",
    category: "Starters",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.oD6vrx4uwfcddKLSeV3TkgHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 14,
    name: "Garlic Bread",
    price: "₹50",
    category: "Sides",
    image:
      "https://th.bing.com/th/id/OIP.ts_x68EhgRRSJhS3PbTimQHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 15,
    name: "Penne Alfredo",
    price: "₹120",
    category: "Main Course",
    image:
      "https://th.bing.com/th/id/OIP.sIh4yOd7gCkKVgQ2Ng1umwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 16,
    name: "Fruit Tart",
    price: "₹70",
    category: "Dessert",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.hzV4Su91MACQ7G4S-VVx0QHaEo?rs=1&pid=ImgDetMain",
  },
];

const BuffetData = () => (
  <CategoryPage
    title="Buffet Menu"
    tagline="Unlimited choices, served at your own pace."
    emoji="🍽️"
    items={menuData}
  />
);

export default BuffetData;
