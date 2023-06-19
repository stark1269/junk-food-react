import { useParams } from "react-router-dom";
import { Item, List } from "./Menu.styled";
import { TbShoppingCartPlus } from 'react-icons/tb';

export const Menu = ({ menu, AddShopCart }) => {
  const { name } = useParams();
  const { foods } = menu.find(item => item.rest_name === name);
  
  return (
    <>
      <List>
        {foods.map(item => {
          return (
            <Item key={item.id}>
              <img src={item.picture} alt={item.name} width={200} />
              <h2>{item.name}</h2>
              <p>Price: {item.price}$</p>
              <button onClick={() => AddShopCart(item)}><TbShoppingCartPlus/></button>
            </Item>
          )
        })}
      </List>
    </>
  )
};