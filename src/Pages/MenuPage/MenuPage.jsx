import { Restaurants } from "components/Restaurants/Restaurants";
import { Outlet } from "react-router-dom";
import { Wrapp } from "./MenuPage.styled";

const MenuPage = ({ menu }) => {

  return (
    <Wrapp>
      <Restaurants menu={menu} />
      <Outlet />
    </Wrapp>
  )
};

export default MenuPage