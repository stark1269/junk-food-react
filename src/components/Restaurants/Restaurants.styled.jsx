import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Item = styled.li`
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: #00000070;
`;

export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Josefin Sans';
  font-size: 24px;
  &.active {
    color: greenyellow;
  }
`;