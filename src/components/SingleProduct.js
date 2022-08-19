import { Card, Button } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products" style={{ marginRight: 5 }}>
      <Card style={{height:"20rem", position:"relative"}}>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.name}
          className="card-img"
        />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          
         { cart.some( (p) => p.id === prod.id) ? (
          <div style={{width:'6rem', position:"absolute",bottom:"10px"}}>
          
           <AiOutlineMinus 
          onClick={() => { dispatch({ 
            type: "CHANGE_CART_QTY",
            payload: {
              id: prod.id,
              qty: (prod.qty - 1)
            }
             })}} />
          <span>{prod.qty}</span>
          <AiOutlinePlus
          onClick={() => { dispatch({ 
            type: "CHANGE_CART_QTY",
            payload: {
              id: prod.id,
              qty: (prod.qty + 1)
            }
             })}}
           />
          
          </div>
         ) : (
          <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
         )} 
         

          {/* <div style={{position:"absolute",bottom:"10px"}}>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
          </div> */}


        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
