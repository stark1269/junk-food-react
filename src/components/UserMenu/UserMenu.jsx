import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { Wrapp, Text, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapp>
      <Text>Welcome, {user.email}</Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Wrapp>
  )
};