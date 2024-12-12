
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = ({ title, description, imgSrc, link }) => (
  <div className={s.color}>
    <Card style={{ width: "18rem" }} className={s.shadow}>
      <Card.Img variant="top" src={imgSrc} className={s['card-img-top']} />
      <Card.Body>
        <Card.Title className={s.name}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <button className={s.button}>Menu</button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);

function MenuPage() {
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Pizza Hut",
      description: " Pizza Hut is a global restaurant chain famous for its  delicious pizzas, pastas, and family-friendly dining experience.",
      imgSrc: "https://th.bing.com/th/id/OIP.4p51L4i6zYTC5Og8SkXD3gAAAA?rs=1&pid=ImgDetMain",
      link: "/pizzahut",
    },
    {
      title: "Coffee",
      description: "  Coffee is a beloved brewed beverage made from roasted coffee beans, known for its rich aroma, bold flavor, and energizing  caffeine boost.",
      imgSrc: "https://static.vecteezy.com/system/resources/previews/014/761/505/original/coffee-shop-logo-design-template-for-business-sign-identity-for-restaurant-cafe-royalty-boutique-heraldic-and-other-illustration-free-vector.jpg",
      link: "/cafe",
    },
    {
      title: "Biryani",
      description: " Biryani is a flavorful and aromatic South Asian dish made with spiced rice, tender meat or vegetables, and a blend of rich spices.",
      imgSrc: "https://th.bing.com/th/id/OIP.XE8HwjLUr9i68VRSpEosigHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: "/biryani",
    },
    {
      title: "Buffet",
      description: "A buffet is a self-serve dining experience offering a variety of dishes, allowing guests to enjoy unlimited choices at their own pace.",
      imgSrc: "https://www.hearnkirkwood.com/assets/landingpage/Food-unlimited.jpeg",
      link: "/buffet",
    },
    {
      title: "Tiffin",
      description: "Tiffins are light, flavorful South Indian meals typicall  featuring dishes like idli, dosa, vada, and upma, often served with chutneys and sambar.",
      imgSrc:"https://i.pinimg.com/originals/27/9f/bf/279fbf90a26a2c8c73b3dec0db1692cb.jpg",
      link: "/tiffin",
    },
    {
      title: "Fry'D Chicken",
      description: " Fried chicken is a crispy and flavorful dish made by seasoning chicken, coating it in batter, and deep-frying it to golden perfection.",
      imgSrc: "https://image.freepik.com/free-vector/vector-delicious-fried-chicken-logo-badges_66757-485.jpg?w=2000",
      link: "/fryed",
    },
    {
      title: "Cold Shakes",
      description: "  Cold shakes are creamy, chilled beverages made with blended ice cream, milk, and flavorings like fruits or chocolate for a refreshing treat.",
      imgSrc: "https://i.pinimg.com/originals/a1/29/da/a129daea37ea5368636f2b6d5525ddb6.jpg",
      link: "/shakes",
    },
    {
      title: "Shawarma",
      description: "Shawarma is a Middle Eastern dish consisting of seasoned meat,typically served in a pita or flatbread with vegetables and sauces.",
      imgSrc: "https://img.freepik.com/premium-vector/shawarma-arabic-logo_597134-381.jpg?w=2000",
      link: "/shawarma",
    },
    // Add other menu items here
  ];

  return (
    <>
      <nav className={s['navbar-custom']}>
        <h1 className={s['text-center']}>Yeah! Make Your Order Delicious</h1>
        <h4 className={s['text-center']}>"Beautiful –Food is our common ground, a universal experience that transcends borders."</h4>
      </nav>
      <button className={s.buttons} onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        {data.cartArr.length}
      </button>
      <div className={s.main}>
        {menuItems.map((item, index) => (
          <MenuCard 
            key={index} 
            title={item.title} 
            description={item.description} 
            imgSrc={item.imgSrc} 
            link={item.link} 
          />
        ))}
      </div>
    </>
  );
}

export default MenuPage;

