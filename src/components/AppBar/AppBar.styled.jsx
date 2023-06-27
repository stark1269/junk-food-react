import { styled } from "styled-components";
import { Link as RauteLink, NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000070;
  @media (min-width: 768px) {
    padding: 18px;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const Link = styled(RauteLink)`
  font-size: 22px;
  font-family: 'Josefin Sans';
  color: white;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const LinkIcon = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-family: 'Josefin Sans';
  color: ${p => p.length ? "greenyellow" : "orangered"};
  @media (min-width: 768px) {
    font-size: 46px;
  }
`;

