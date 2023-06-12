import { NavLink, Outlet } from "react-router-dom";
import { Div } from "./MenuPage.styled";

const MenuPage = ({menu}) => {

  return (
    <Div>
      <ul>
        {menu.map(item => {
          return (<li key={item.id}>
            <NavLink to={`${item.rest_name}`}>{item.rest_name}</NavLink>
          </li>)
        })}
      </ul>
      <Outlet />
    </Div>
  )
};

export default MenuPage