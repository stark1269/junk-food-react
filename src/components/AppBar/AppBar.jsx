import { UserMenu } from "components/UserMenu/UserMenu";
import { Header, Wrapp, Link } from "./AppBar.styled";
import icon from '../../images/icon-burger.png';

export const AppBar = ({ setShopCart }) => {
  return (
    <Header>
      <Wrapp>
        <img src={icon} alt="icon" width={50} />
        <Link to='/rest'>Burgers</Link>
      </Wrapp>
      <UserMenu setShopCart={setShopCart} />
    </Header>
  );
};