import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import { toast } from "react-toastify";

const BiryaniData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  //  Menu Data with Biryani Items
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
      name: "Hyderabadi Biryani",
      price: "₹140",
      category: "Main Course",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.tnzLyQlYfwGVmq_3AU-cGQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1>Biryani House</h1>
          </header>
          <div>
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                 onClick={() => {dispatch(cart(item, ind)), toast.success("item add successful", {autoClose: 1000,})} }
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

export default BiryaniData;
