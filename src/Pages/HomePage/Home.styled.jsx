import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import photo from '../../images/FoodBG.jpeg';

export const Div = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.2),rgba(255,255,255,.2)),url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 44px;
  font-family: 'Josefin Sans';
`;

export const Text = styled.p`
  font-size: 26px;
  font-family: 'Josefin Sans';
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;