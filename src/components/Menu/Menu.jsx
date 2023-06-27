import { useParams } from "react-router-dom";
import { Item, List, Text, Button } from "./Menu.styled";
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
              <img loading="lazy" src={item.picture} alt={item.name} width={200} />
              <Text>{item.name}</Text>
              <Text>Price: {item.price}$</Text>
              <Button onClick={() => AddShopCart(item, item.id)}><TbShoppingCartPlus /></Button>
            </Item>
          )
        })}
      </List>
    </>
  )
};