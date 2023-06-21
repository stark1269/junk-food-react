import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Label, Btn, Span, Error } from './ShopCartForm.styled';

const Schema = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

export const ShopCartForm = ({ shopCart }) => {
  const order = shopCart.reduce((acc, item) => {
    acc.push({ name: item.name, quantity: item.quantity });
    return acc;
  }, []);

  return (
    <Formik
      initialValues={
        {
          name: '',
          phone: '',
          address: '',
        }
      }
      validationSchema={Schema}
      onSubmit={(value, { resetForm }) => {
        console.log(value, value.order = order)
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <Label>
          <Span>Name</Span>
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </Label>
        <Label>
          <Span>Phone</Span>
          <Input type="tel" name="phone" />
          <Error name="phone" component="div" />
        </Label>
        <Label>
          <Span>Address</Span>
          <Input type="search" name="address" />
          <Error name="address" component="div" />
        </Label>
        <Btn type='submit'>Order</Btn>
      </Form>
    </Formik>
  )
};