import { Item, List, Link } from "./Restaurants.styled";

export const Restaurants = ({ menu, shopCart }) => {
  const test = () => {
    if (shopCart.length) {
      console.log('открыть модалку с двумя кнопками 1) закрывает модалку и делает навигацию в корзину 2) закрывает модалку и чистит корзину')
    }
  };

  return (
    <List>
      {menu.map(item => {
        return <Item key={item.id}>
          <Link onClick={test} to={`/rest/${item.rest_name}`}>{item.rest_name}</Link>
        </Item>
      })}
    </List>
  )
};