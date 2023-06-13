const ShopCartPage = ({ shopCart }) => {
  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {shopCart.map(item => {
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

export default ShopCartPage