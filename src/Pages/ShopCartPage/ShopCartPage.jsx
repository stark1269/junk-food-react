import { AiFillDelete } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';

const ShopCartPage = ({ shopCart, DeleteShopCart }) => {
  return !shopCart.length ? <Navigate to='/rest' /> : <><h2>Shopping Cart</h2>
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
    </ul></>
};

export default ShopCartPage