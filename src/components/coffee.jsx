import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import "./main.css";

const CafeData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  //  Menu Data with Cafe Items
  const menuData = [
    {
      id: 5,
      name: "Espresso",
      price: " $3",
      category: "Beverage",
      image:
        "https://th.bing.com/th/id/OIP.gzBuoJWcQj9EuHkrrimCigHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 6,
      name: "Sandwich",
      price: "$5",
      category: "Food",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.ohrluOUVy__pXVpyJKAIfAHaEy?w=304&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 7,
      name: "Muffin",
      price: "$2",
      category: "Pastry",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.pagLLG608RxTB-L5sXVNBQHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "Latte",
      price: "$3.5",
      category: "Beverage",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.6Lb2xzBM3B6maFHPDwhw5AHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1> Coffee Cafe Menu</h1>
          </header>
          <div>
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                  onClick={() => {
                    dispatch(cart(item, ind));
                  }}
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

          <button className="back-button" onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default CafeData;
