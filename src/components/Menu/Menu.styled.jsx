import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: calc(70% - 20px);
`;

export const Item = styled.li`
  position: relative;
  padding: 18px;
  width: calc((100% - 24px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: #eeeeee7d;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Josefin Sans';
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  border: none;
  background-color: transparent;
  color: #2b7b0c;
  font-size: 32px;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.2);
  }
`;