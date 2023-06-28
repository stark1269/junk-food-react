import { styled } from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Josefin Sans';
  text-align: center;
  color: ${p => p.theme.colors.white};
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Btn = styled.button`
  padding: 4px;
  border: 2px solid black;
  border-radius: 6px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.4) inset;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.error};
  }
`;
