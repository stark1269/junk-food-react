import { UserMenu } from "components/UserMenu/UserMenu";
import { Header, Wrapp, Link, LinkIcon } from "./AppBar.styled";
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';

export const AppBar = ({ shopCart }) => {
  const shopCartLength = shopCart.length;

  return (
    <Header>
      <Wrapp>
        <Link to='/rest'>Restaurants</Link>
        {!shopCart.length ?
          <LinkIcon shopCartLength={shopCartLength} to='/rest'><TbShoppingCartOff /></LinkIcon> :
          <LinkIcon shopCartLength={shopCartLength} to='/shop-cart'><TbShoppingCartPlus /></LinkIcon>}
      </Wrapp>
      <UserMenu />
    </Header>
  );
};