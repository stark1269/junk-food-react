import { ShopCart } from 'components/ShopCart/ShopCart';
import { Navigate } from 'react-router-dom';

const ShopCartPage = ({ shopCart, DeleteShopCart }) => {
  return !shopCart.length ? <Navigate to='/rest' /> : <>
    <h2>Shopping Cart</h2>
    <ShopCart shopCart={shopCart} DeleteShopCart={DeleteShopCart} />
  </>
};

export default ShopCartPage