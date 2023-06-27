import { UserMenu } from "components/UserMenu/UserMenu";
import { Header, Wrapp, Link, LinkIcon } from "./AppBar.styled";
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';
import icon from '../../images/icon-burger.png';

export const AppBar = ({ shopCart }) => {
  return (
    <Header>
      <Wrapp>
        <img src={icon} alt="icon" width={50} />
        <Link to='/rest'>Burgers</Link>
        {!shopCart.length ?
          <LinkIcon length={shopCart.length} to='/rest'><TbShoppingCartOff /></LinkIcon> :
          <LinkIcon length={shopCart.length} to='/shop-cart'><TbShoppingCartPlus /></LinkIcon>}
      </Wrapp>
      <UserMenu />
    </Header>
  );
};
