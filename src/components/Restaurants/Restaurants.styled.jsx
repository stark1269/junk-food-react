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
  box-shadow: 2px 2px 1px 0px rgba(89,  0,  163, 0.3);
  background-color: ${p => p.theme.colors.bgc};
`;

export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${p => p.theme.colors.white};
  font-family: 'Josefin Sans';
  font-size: 24px;
  &.active {
    color: ${p => p.theme.colors.current};
  }
`;