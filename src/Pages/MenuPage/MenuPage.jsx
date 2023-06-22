import { Restaurants } from "components/Restaurants/Restaurants";
import { Outlet } from "react-router-dom";
import { Wrapp } from "./MenuPage.styled";

const MenuPage = ({ menu, shopCart, setShopCart }) => {

  return (
    <Wrapp>
      <Restaurants shopCart={shopCart} setShopCart={setShopCart} menu={menu} />
      <Outlet />
    </Wrapp>
  )
};

export default MenuPage