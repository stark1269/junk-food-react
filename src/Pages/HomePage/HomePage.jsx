import { selectIsLoggedIn } from "redux/selectors";
import { useSelector } from 'react-redux';
import { Div, Title, Text, Link, LinkWrap } from "./Home.styled";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Div>
      <Title>Burger delivery</Title>
      <Text>Please log in or register to continue.</Text>
      <LinkWrap>
        {isLoggedIn ? <Link to='/rest'>Visit the burgers</Link> : <><Link to='/login' >Log in</Link>
          <Link to='/register' >Sing up</Link></>}
      </LinkWrap>
    </Div>
  )
};

export default HomePage