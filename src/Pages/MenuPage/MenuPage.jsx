import { UserMenu } from "components/UserMenu/UserMenu";
import { Link, NavLink, Outlet } from "react-router-dom";

const MenuPage = ({ menu, shopCart }) => {

  return (
    <div>
      {!shopCart.length ? <div>Shopping cart emply</div> : <Link to='/shop-cart'>Shop cart</Link>}
      <ul>
        {menu.map(item => {
          return <li key={item.id}>
            <NavLink to={`/rest/${item.rest_name}`}>{item.rest_name}</NavLink>
          </li>
        })}
      </ul>
      <Outlet />
      <UserMenu/>
    </div>
  )
};

export default MenuPage