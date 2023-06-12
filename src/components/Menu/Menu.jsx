import { useParams } from "react-router-dom";

export const Menu = ({ menu }) => {
  const { name } = useParams();
  const { foods } = menu.find(item => item.rest_name === name);
  
  return (
    <>
      <ul>
        {foods.map(item => {
          return (
            <li key={item.id}>
              <img src={item.picture} alt={item.name} width={200} />
              <h2>Name: {item.name}</h2>
              <p>Price: {item.price}$</p>
            </li>
          )
        })}
      </ul>
    </>
  )
};