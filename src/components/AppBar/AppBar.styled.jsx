import { styled } from "styled-components";
import { Link as RauteLink, NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee7d;
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const Link = styled(RauteLink)`
  font-size: 32px;
  font-family: 'Josefin Sans';
  color: black;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkIcon = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  font-family: 'Josefin Sans';
  color: ${p => p.shopCartLength ? "#2b7b0c" : "#aa2121"};
`;

