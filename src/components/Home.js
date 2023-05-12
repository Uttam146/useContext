import SingleProduct from './SingleProduct';
import { CartState } from '../context/Cart/CartContext';


const Home = ()=>{
    const {products}  = CartState();
    
    return(
        <div className='productContainer'>
            {products.map((prod)=>(
                <SingleProduct prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default Home;