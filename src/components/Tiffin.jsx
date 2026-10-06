import CategoryPage from "./CategoryPage";

const menuData = [
  {
    id: 17,
    name: "Pancakes",
    price: "₹50",
    category: "Breakfast",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.EfQbFzgVZjK4pQOtUvbUkgHaEo?rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    name: "Waffles",
    price: "₹60",
    category: "Breakfast",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.yoIsqQBIRcqFxpZ1evtgkwHaE2?rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    name: "Scrambled Eggs",
    price: "₹40",
    category: "Breakfast",
    image:
      "https://th.bing.com/th/id/OIP.cRLk49RmvHygZPMtzE5UYgHaEJ?rs=1&pid=ImgDetMain",
  },
  {
    id: 20,
    name: "French Toast",
    price: "₹50",
    category: "Breakfast",
    image:
      "https://th.bing.com/th/id/OIP.nQ-RhI0AkJCEj8ZSFKJsswHaFj?w=285&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 21,
    name: "Oatmeal",
    price: "₹30",
    category: "Breakfast",
    image:
      "https://th.bing.com/th/id/OIP.KA6iFg5s6YKPWyAJ-plFNQHaHa?w=204&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const TiffinData = () => (
  <CategoryPage
    title="Breakfast Menu"
    tagline="Light, tasty and perfect to start your day."
    emoji="🥞"
    items={menuData}
  />
);

export default TiffinData;
