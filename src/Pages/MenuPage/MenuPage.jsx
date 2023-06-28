import { Restaurants } from "components/Restaurants/Restaurants";
import { Outlet } from "react-router-dom";
import { LinkIcon, Wrapp } from "./MenuPage.styled";
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';

const MenuPage = ({ menu, shopCart, setShopCart }) => {

  return (
    <Wrapp>
      <Restaurants shopCart={shopCart} setShopCart={setShopCart} menu={menu} />
      <Outlet />
      {!shopCart.length ?
        <LinkIcon length={shopCart.length} to='/rest'><TbShoppingCartOff /></LinkIcon> :
        <LinkIcon length={shopCart.length} to='/shop-cart'><TbShoppingCartPlus /></LinkIcon>}
    </Wrapp>
  )
};

export default MenuPage