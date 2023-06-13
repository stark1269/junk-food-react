import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useState, Suspense, useEffect } from 'react';
import { Menu } from './Menu/Menu';
import { restaurants } from 'api/api';
import ShopCartPage from 'Pages/ShopCartPage/ShopCartPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operations';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const MenuPage = lazy(() => import('../Pages/MenuPage/MenuPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [menu] = useState(restaurants);
  const [shopCart, setShopCart] = useState([]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const AddShopCart = (item) => {
    setShopCart(state => [...state, item])
  };

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<PublicRoute redirectTo="/rest" component={<LoginPage />} />} />
        <Route path="/register" element={<PublicRoute redirectTo="/rest" component={<RegisterPage />} />} />
        <Route path="/shop-cart" element={<PrivateRoute redirectTo="/" component={<ShopCartPage shopCart={shopCart} />} />} />
        <Route path="/rest" element={<PrivateRoute redirectTo="/" component={<MenuPage menu={menu} shopCart={shopCart} />} />} >
          <Route path='/rest/:name' element={<Menu menu={menu} AddShopCart={AddShopCart} />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
};
