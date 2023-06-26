import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Label, Btn, Span, AutocompleteInput } from './ShopCartForm.styled';
import Notiflix from 'notiflix';
import { Map } from 'components/Map/Map';
import { useState } from 'react';


const Schema = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

export const ShopCartForm = ({ shopCart, setShopCart }) => {
  const [coordinate, setCoordinate] = useState({lat: 50.450152, lng: 30.524047});

  const order = shopCart.reduce((acc, item) => {
    acc.push({ name: item.name, quantity: item.quantity });
    return acc;
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
    },
    validationSchema: Schema,
    onSubmit: (value, { resetForm }) => {
      console.log(value, value.order = order)
      resetForm();
      setShopCart([]);
      Notiflix.Notify.success(`${value.name}, thank you for your order`);
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
      </Label>
      <Label>
        <Span>Phone</Span>
        <Input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
      </Label>
      <Label>
        <Span>Address</Span>
        <AutocompleteInput onPlaceSelected={(place) => {
          const { lat, lng } = place.geometry.location;
          setCoordinate({ lat: lat(), lng: lng() });
          formik.setFieldValue("address", place.formatted_address || '')
        }}
          options={{
            types: ["address"],
            componentRestrictions: { country: "ua" },
          }}
          apiKey='AIzaSyCrs9IgGlZ0hl2-4pueyi1ESmZ7nR5YSq4'
          type="text"
          name="address"
          placeholder=''
          value={formik.values.address}
          onChange={formik.handleChange} />
      </Label>
      <Map coordinate={coordinate} />
      <Btn type='submit'>Order</Btn>
    </Form>
  )
};