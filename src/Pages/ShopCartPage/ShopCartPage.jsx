import { ShopCart } from 'components/ShopCart/ShopCart';
import { ShopCartForm } from 'components/ShopCartForm/ShopCartForm';
import { Navigate } from 'react-router-dom';
import { Wrapp } from './ShopCartPage.styled';

const ShopCartPage = ({ shopCart, DeleteShopCart, updateCart, setShopCart }) => {
  return !shopCart.length ? <Navigate to='/rest' /> : <>
    <Wrapp>
      <ShopCartForm shopCart={shopCart} setShopCart={setShopCart} />
      <ShopCart shopCart={shopCart} DeleteShopCart={DeleteShopCart} updateCart={updateCart} />
    </Wrapp>
    
  </>
};

export default ShopCartPage