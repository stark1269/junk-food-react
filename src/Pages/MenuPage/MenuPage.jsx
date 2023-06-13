import { Link, NavLink, Outlet } from "react-router-dom";
import { Div } from "./MenuPage.styled";

const MenuPage = ({menu}) => {

  return (
    <Div>
      <Link to='/shop-cart'>Shop cart</Link>
      <ul>
        {menu.map(item => {
          return (<li key={item.id}>
            <NavLink to={`/rest/${item.rest_name}`}>{item.rest_name}</NavLink>
          </li>)
        })}
      </ul>
      <Outlet />
    </Div>
  )
};

export default MenuPage