import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useState } from 'react';
import { Menu } from './Menu/Menu';
import { restaurants } from 'api/api';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const MenuPage = lazy(() => import('../Pages/MenuPage/MenuPage'));

export const App = () => {
  const [menu] = useState(restaurants);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/rest' element={<MenuPage menu={menu} />}>
        <Route path=':name' element={<Menu menu={menu} />} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
};