import { Formik } from 'formik';
import { Form, Input, Label, Btn } from './ShopCartForm.styled';

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
      onSubmit={(value, { resetForm }) => {
        console.log(value, value.order = order)
        resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <Label>
          Phone
          <Input type="tel" name="phone" />
        </Label>
        <Label>
          Address
          <Input type="search" name="address" />
        </Label>
        <Btn type='submit'>Order</Btn>
      </Form>
    </Formik>
  )
};