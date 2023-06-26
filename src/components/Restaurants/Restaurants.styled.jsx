import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 30%;
`;

export const Item = styled.li`
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: #eeeeee7d;
  box-shadow: 4px 4px 4px 0px rgba(80, 80, 80, 0.3);
`;

export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
  font-family: 'Josefin Sans';
  font-size: 24px;
  &.active {
    color: #2b7b0c;
  }
`;