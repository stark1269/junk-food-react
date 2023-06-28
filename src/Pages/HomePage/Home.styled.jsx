import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import photo from '../../images/FoodBG.jpeg';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-family: 'Josefin Sans';
  color: ${p => p.theme.colors.white};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-family: 'Josefin Sans';
  color: ${p => p.theme.colors.white};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border: 1px solid white;
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  transition: background-color 300ms linear;
  &:hover {
    background-color: ${p => p.theme.colors.current};
  }
`;