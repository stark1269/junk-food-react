import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { Wrapp, Text, Btn } from './UserMenu.styled';

export const UserMenu = ({ setShopCart }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const correctName = user.email.split('@');
  
  return (
    <Wrapp>
      <Text>Welcome, {correctName[0]}</Text>
      <Btn type="button" onClick={() => {
        setShopCart([]);
        dispatch(logOut());
      }
      }>
        Logout
      </Btn>
    </Wrapp>
  )
};