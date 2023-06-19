import { AiFillDelete } from 'react-icons/ai';

export const ShopCart = ({ DeleteShopCart, shopCart, updateCart }) => {
  return (
    <ul>
      {shopCart.map(item => {
        return (
          <li key={item.id}>
            <img src={item.picture} alt={item.name} width={200} />
            <h2>Name: {item.name}</h2>
            <p>Price: {item.price * item.quantity}$</p>
            <button disabled={item.quantity === 1} onClick={() => updateCart(item.id, -1)}>-</button>
            <input type='text' value={item.quantity} readOnly />
            <button onClick={() => updateCart(item.id, 1)}>+</button>
            <button onClick={() => DeleteShopCart(item.id)}><AiFillDelete /></button>
          </li>
        )
      })}
    </ul>
  )
};