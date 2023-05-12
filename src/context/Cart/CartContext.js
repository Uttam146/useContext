import { createContext, useContext, useState } from "react";
import { faker } from '@faker-js/faker';
export const Cart = createContext();

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const productArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),

        image:faker.image.business(640,480,true)
    })
    )
    const [products] = useState(productArray);
    // console.log('child'+children);
    return (
        <Cart.Provider value={{ cart, setCart, products }}>
            {children}
        </Cart.Provider>
    );
}

export const CartState = () => {
    return useContext(Cart);
  };
  
export default CartContext;