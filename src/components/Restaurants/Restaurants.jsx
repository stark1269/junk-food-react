import { useState } from "react";
import { Item, List, Link } from "./Restaurants.styled";
import { RestModal } from "components/Modal/Modal";

export const Restaurants = ({ menu, shopCart, setShopCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    if (shopCart.length) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <List>
        {menu.map(item => {
          return <Item key={item.id}>
            <Link onClick={showModal} to={`/rest/${item.rest_name}`}>{item.rest_name}</Link>
          </Item>
        })}
      </List>
      {isModalOpen && <RestModal setShopCart={setShopCart} setIsModalOpen={setIsModalOpen} />}
    </>
  )
};