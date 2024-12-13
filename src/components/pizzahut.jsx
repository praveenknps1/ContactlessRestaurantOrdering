import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import "./main.css"; // Importing the CSS file

const Pizzahut = () => {
  const { tableNumber } = useParams();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuData = [
    {
      id: 1,
      name: "Pizza",
      price: "₹100",
      category: "Main Course",
      image:
        "https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg",
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
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1>PizzaHut Menu</h1>
          </header>

          <div>
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                  onClick={() => dispatch(cart(item, ind))}
                  className="cart_"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <br />
          <button className="cart-button" onClick={() => navigate("/cart")}>
            My Cart: {data.cartArr.length}
          </button>

          <button className="back-button" onClick={() => navigate(-1)}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Pizzahut;
