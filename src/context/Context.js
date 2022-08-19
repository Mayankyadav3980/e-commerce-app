import { createContext, useContext, useReducer } from "react";
import faker from 'faker';
import { cartReducer } from './Reducers';

const Cart = createContext()
faker.seed(99);

const Context = ({ children }) => {
  

    const products = [...Array(9)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://www.netmeds.com/images/cms/wysiwyg/blog/2021/03/1614588224_grains_big_450.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));

      
    
      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
        totalQuantity: 0

      });

      return (
        <Cart.Provider value={{ state, dispatch }}>
          {children}
        </Cart.Provider>
      );
}

export const CartState = () => {
    return useContext(Cart);
  };
  
  export default Context;