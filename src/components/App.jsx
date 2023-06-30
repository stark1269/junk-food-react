import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useState, Suspense, useEffect } from 'react';
import { Menu } from './Menu/Menu';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operations';
import { Layout } from './Layout/Layout';
import { Logo } from './Logo/Logo';
import restaurants from 'api/api.json';


const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const MenuPage = lazy(() => import('../Pages/MenuPage/MenuPage'));
const ShopCartPage = lazy(() => import('Pages/ShopCartPage/ShopCartPage'));

const getInitShopCart = () => {
  const SavedShopCart = JSON.parse(localStorage.getItem('shoppingCart'));
  return SavedShopCart ? SavedShopCart : [];
};

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [menu] = useState(restaurants);
  const [shopCart, setShopCart] = useState(getInitShopCart);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shopCart));
  }, [shopCart]);

  const AddShopCart = (item, id) => {
    const repeatDish = shopCart.find(cartItem => cartItem.id === id);

    if (repeatDish) {
      const updatedCart = shopCart.map(cartItem => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      setShopCart(updatedCart);
    } else {
      setShopCart([...shopCart, item]);
    }
  };

  const DeleteShopCart = (id) => {
    setShopCart(shopCart.filter(cartItem => cartItem.id !== id))
  };

  const updateCart = (id, type) => {
    const updatedCart = shopCart.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + type };
      }
      return cartItem;
    });

    setShopCart(updatedCart);
  };

  return isRefreshing ? (
    <Logo/>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout setShopCart={setShopCart} />}>
          <Route path="/rest" element={<PrivateRoute redirectTo="/" component={<MenuPage shopCart={shopCart} setShopCart={setShopCart} menu={menu} />} />} >
            <Route path='/rest/:name' element={<Menu menu={menu} AddShopCart={AddShopCart} />} />
          </Route>
          <Route path="/shop-cart" element={<PrivateRoute redirectTo="/" component={<ShopCartPage shopCart={shopCart} setShopCart={setShopCart} DeleteShopCart={DeleteShopCart} updateCart={updateCart} />} />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<PublicRoute redirectTo="/rest" component={<LoginPage />} />} />
        <Route path="/register" element={<PublicRoute redirectTo="/rest" component={<RegisterPage />} />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
};