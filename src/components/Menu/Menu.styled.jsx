import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media (min-width: 768px) {
    width: calc(70% - 20px);
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: #00000070;
  @media (min-width: 768px) {
    width: calc((100% - 24px) / 3);
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Josefin Sans';
  color: white;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: 0;
  border: none;
  background-color: transparent;
  color: greenyellow;
  font-size: 32px;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.2);
  }
`;