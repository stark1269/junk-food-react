import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapp = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinkIcon = styled(NavLink)`
  position: fixed;
  bottom: 12px;
  left: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  font-family: 'Josefin Sans';
  color: ${p => p.length ? p.theme.colors.current : '#ef4e137c'};
  @media (min-width: 768px) {
    font-size: 58px;
    bottom: 22px;
    left: 22px;
  }
`;