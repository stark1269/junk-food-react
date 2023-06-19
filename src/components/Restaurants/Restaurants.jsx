import { Item, List, Link } from "./Restaurants.styled";

export const Restaurants = ({ menu }) => {
  return (
    <List>
      {menu.map(item => {
        return <Item key={item.id}>
          <Link to={`/rest/${item.rest_name}`}>{item.rest_name}</Link>
        </Item>
      })}
    </List>
  )
};