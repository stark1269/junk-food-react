import { List, Item, Wrapp } from './ShopCart.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ShopCart = ({ DeleteShopCart, shopCart, updateCart }) => {
  const totalPrice = shopCart.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  return (
    <Wrapp>
      <List>
        {shopCart.map(item => {
          return (
            <Item key={item.id}>
              <img src={item.picture} alt={item.name} width={200} />
              <h2>Name: {item.name}</h2>
              <p>Price: {item.price * item.quantity}$</p>
              <button disabled={item.quantity === 1} onClick={() => updateCart(item.id, -1)}>-</button>
              <input type='text' value={item.quantity} readOnly />
              <button onClick={() => updateCart(item.id, 1)}>+</button>
              <button onClick={() => DeleteShopCart(item.id)}><AiFillDelete /></button>
            </Item>
          )
        })}
      </List>
      <p>Total Price: {totalPrice}</p>
    </Wrapp>
  )
};