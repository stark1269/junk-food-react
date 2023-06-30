import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Label, Btn, Span, AutocompleteInput } from './ShopCartForm.styled';
import Notiflix from 'notiflix';
import { Map } from 'components/Map/Map';
import { useState } from 'react';
import { useMask } from '@react-input/mask';
import { addToOrder } from '../../firebase/services';

const KEY_API = 'AIzaSyCrs9IgGlZ0hl2-4pueyi1ESmZ7nR5YSq4';

const Schema = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

export const ShopCartForm = ({ shopCart, setShopCart }) => {
  const inputRef = useMask({ mask: '+38 (___) ___-__-__', replacement: { _: /\d/ } });
  const [coordinate, setCoordinate] = useState({ lat: 50.450152, lng: 30.524047 });

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
      addToOrder(value, value.order = order);
      resetForm();
      setShopCart([]);
      Notiflix.Notify.success(`${value.name}, thank you for your order`);
    }
  });

  return (
    <Form autoComplete='off' onSubmit={formik.handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input placeholder='Please enter your name' type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
      </Label>
      <Label>
        <Span>Phone</Span>
        <Input ref={inputRef} placeholder='+38 (066) 123-45-67' type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
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
          apiKey={KEY_API}
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
