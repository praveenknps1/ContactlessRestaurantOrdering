import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./style.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cart } from "../toolkit/action";
// import { icons } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";

function MenuPage() {
  let data = useSelector((state) => {
    return state;
  });
  console.log(data);

  return (
    <>
<div className={s.main_div}>
<Navbar style={{ backgroundColor: "white", borderBottom: "1px solid #ddd" }}>
      <Container >
        <Navbar.Brand  >
          <h1 style={{ color: "#333", margin: 0}} >Yeah! Make Tour Order  Delicious</h1>
        </Navbar.Brand>
        <br />
        <Navbar.Collapse className="justify-content-end">
          <span style={{ color: "#555", fontStyle: "italic", fontSize: "1.2rem" }}>
            "Beautiful –Food is our common ground, a universal experience that transcends borders."
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <button className={s.buttons} style={{ backgroundColor: "#D76C82" }}>
  <FaShoppingCart style={{ marginRight: "5px" }} />
  {data.cartArr.length}
</button>
      <br />
</div>

      
      <div className={s.main}>
        <div className={s.hi}>
          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.4p51L4i6zYTC5Og8SkXD3gAAAA?rs=1&pid=ImgDetMain"
                width="250px"
              />
              <Card.Body>
                <Card.Title className={s.name}>Pizza Hut</Card.Title>
                <Card.Text>
                  Pizza Hut is a global restaurant chain famous for its
                  delicious pizzas, pastas, and family-friendly dining
                  experience.
                </Card.Text>
                <Link to="/pizzahut">
                <Button variant="primary">Menu</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://static.vecteezy.com/system/resources/previews/014/761/505/original/coffee-shop-logo-design-template-for-business-sign-identity-for-restaurant-cafe-royalty-boutique-heraldic-and-other-illustration-free-vector.jpg"
                width="250px"
              />
              <Card.Body>
                <Card.Title className={s.name}>Coffee</Card.Title>
                <Card.Text>
                  Coffee is a beloved brewed beverage made from roasted coffee
                  beans, known for its rich aroma, bold flavor, and energizing
                  caffeine boost.
                </Card.Text>
                <Link to="/cafe">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.XE8HwjLUr9i68VRSpEosigHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                width="250px"
              />
              <Card.Body>
                <Card.Title className={s.name}>Biryani</Card.Title>
                <Card.Text>
                  Biryani is a flavorful and aromatic South Asian dish made with
                  spiced rice, tender meat or vegetables, and a blend of rich
                  spices.
                </Card.Text>
                <Link to="/biryani">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://www.hearnkirkwood.com/assets/landingpage/Food-unlimited.jpeg"
                width="250px"
                height="250px"
              />
              <Card.Body>
                <Card.Title className={s.name}>Buffet</Card.Title>
                <Card.Text>
                  A buffet is a self-serve dining experience offering a variety
                  of dishes, allowing guests to enjoy unlimited choices at their
                  own pace.
                </Card.Text>
                <Link to="/buffet">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/27/9f/bf/279fbf90a26a2c8c73b3dec0db1692cb.jpg"
                width="250px"
                height="250px"
              />
              <Card.Body>
                <Card.Title className={s.name2}>Tiffin</Card.Title>
                <Card.Text>
                  Tiffins are light, flavorful South Indian meals typically
                  featuring dishes like idli, dosa, vada, and upma, often served
                  with chutneys and sambar.
                </Card.Text>
                <Link to="/tiffin">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://image.freepik.com/free-vector/vector-delicious-fried-chicken-logo-badges_66757-485.jpg?w=2000"
                width="250px"
                height="250px"
              />
              <Card.Body>
                <Card.Title className={s.name2}>Fry'D Chicken</Card.Title>
                <Card.Text>
                  Fried chicken is a crispy and flavorful dish made by seasoning
                  chicken, coating it in batter, and deep-frying it to golden
                  perfection.
                </Card.Text>
                <Link to="/fryed">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/a1/29/da/a129daea37ea5368636f2b6d5525ddb6.jpg"
                width="250px"
                height="250px"
              />
              <Card.Body>
                <Card.Title className={s.name2}>Cold Shakes</Card.Title>
                <Card.Text>
                  Cold shakes are creamy, chilled beverages made with blended
                  ice cream, milk, and flavorings like fruits or chocolate for a
                  refreshing treat.
                </Card.Text>
                <Link to="/shakes">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={s.color}>
            <Card style={{ width: "18rem" }} className={s.shadow}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-vector/shawarma-arabic-logo_597134-381.jpg?w=2000"
                width="250px"
                height="250px"
              />
              <Card.Body>
                <Card.Title className={s.name2}> Shawarma</Card.Title>
                <Card.Text>
                  Shawarma is a Middle Eastern dish consisting of seasoned meat,
                  typically served in a pita or flatbread with vegetables and
                  sauces.
                </Card.Text>
                <Link to="/shawarma">
                  <button>Menu</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuPage;

