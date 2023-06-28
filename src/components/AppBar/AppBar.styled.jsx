import { styled } from "styled-components";
import { Link as RauteLink } from "react-router-dom";

export const Header = styled.header`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.bgc};
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
  color: ${p => p.theme.colors.white};
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;