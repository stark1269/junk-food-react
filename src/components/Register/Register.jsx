import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Btn, Button, Error, Form, Input, Label, LinkWrapper, RegLink, Span, Wrapper } from './Register.styled';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { register } from 'redux/operations';


const Schema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Min of 8 chars')
    .matches(/[a-zA-Z]/, 'Add at least one Latin letter').required('Required'),
});

export const Register = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  return (
    <Formik
      initialValues={
        {
          email: '',
          password: '',
        }
      }
      validationSchema={Schema}
      onSubmit={(value, { resetForm }) => {
        dispatch(register(value))
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" />
          <Error name="email" component="div" />
        </Label>
        <Label>
          <Span>Password</Span>
          <Wrapper>
            <Input type={!showPass ? 'password' : 'text'} name="password" />
            <Button onClick={() => setShowPass(!showPass)} type='button'>{showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</Button>
          </Wrapper>
          <Error name="password" component="div" />
        </Label>
        <LinkWrapper>
          <Btn type="submit">Sing up</Btn>
          <RegLink to='/login'>Log in</RegLink>
        </LinkWrapper>
      </Form>
    </Formik>
  )
};