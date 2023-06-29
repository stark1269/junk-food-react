import { Formik, } from 'formik';
import { useDispatch } from 'react-redux';
import { Btn, Form, Input, Label, LinkWrapper, RegLink } from '../Register/Register.styled';
import { logIn } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={
        {
          email: '',
          password: '',
        }
      }
      onSubmit={(value, { resetForm }) => {
        dispatch(logIn(value))
        resetForm();
      }}>
      <Form autoComplete='off'>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <LinkWrapper>
          <Btn type="submit">Log in</Btn>
          <RegLink to='/register'>Sing up</RegLink>
        </LinkWrapper>
      </Form>
    </Formik>
  )
};
