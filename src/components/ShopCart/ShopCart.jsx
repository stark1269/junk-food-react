import { List, Item, Wrapp, Title, Text, Div, Input, IncrementBtn, DecrementBtn, Button} from './ShopCart.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ShopCart = ({ DeleteShopCart, shopCart, updateCart }) => {
  const totalPrice = shopCart.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  return (
    <Wrapp>
      <Title>Total Price: {totalPrice}$</Title>
      <List>
        {shopCart.map(item => {
          return (
            <Item key={item.id}>
              <img loading='lazy' src={item.picture} alt={item.name} width={200} />
              <Text>{item.name}</Text>
              <Text>Price: {item.price * item.quantity}$</Text>
              <Div>
                <DecrementBtn disabled={item.quantity === 1} onClick={() => updateCart(item.id, -1)}>-</DecrementBtn>
                <Input type='text' value={item.quantity} readOnly />
                <IncrementBtn onClick={() => updateCart(item.id, 1)}>+</IncrementBtn>
              </Div>
              <Button onClick={() => DeleteShopCart(item.id)}><AiFillDelete /></Button>
            </Item>
          )
        })}
      </List>
    </Wrapp>
  )
};