import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";

const BuffetData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  // Updated Menu Data with Buffet Items
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
        "https://www.colbeck.co.uk/wp-content/uploads/2017/11/garlic_bread_shrink.jpg",
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

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1>Buffet Menu</h1>
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

export default BuffetData;
