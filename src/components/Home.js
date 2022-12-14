import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import itemData from "../data";

const Home = () => {
  const {
    state: { products, cart },
  } = CartState();

  return (
    <div className="home">
      <Link to="/e-commerce-app/auth">
        {cart.length !== 0 ? (
          <div className="cont">
            <span>
              <FaShoppingCart color="black" fontSize="20" />

              {cart.length}
            </span>
            Continue
            <FaArrowRight />
          </div>
        ) : null}
      </Link>

      <div className="productContainer">
        {itemData.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
