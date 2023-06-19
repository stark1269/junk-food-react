import { AiFillDelete } from 'react-icons/ai';

export const ShopCart = ({ DeleteShopCart, shopCart }) => {
  return (
    <ul>
      {shopCart.map(item => {
        return (
          <li key={item.id}>
            <img src={item.picture} alt={item.name} width={200} />
            <h2>Name: {item.name}</h2>
            <p>Price: {item.price}$</p>
            <input type='number' />
            <button onClick={() => DeleteShopCart(item.id)}><AiFillDelete /></button>
          </li>
        )
      })}
    </ul>
  )
};