import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useState, Suspense } from 'react';
import { Menu } from './Menu/Menu';
import { restaurants } from 'api/api';
import ShopCartPage from 'Pages/ShopCartPage/ShopCartPage';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const MenuPage = lazy(() => import('../Pages/MenuPage/MenuPage'));

export const App = () => {
  const [menu] = useState(restaurants);
  const [shopCart, setShopCart] = useState([]);

  const AddShopCart = (item) => {
    setShopCart(state => [...state, item])
  };

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shop-cart' element={<ShopCartPage shopCart={shopCart} />} />
        <Route path='/rest' element={<MenuPage menu={menu} />}>
          <Route path='/rest/:name' element={<Menu menu={menu} AddShopCart={AddShopCart} />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
};
