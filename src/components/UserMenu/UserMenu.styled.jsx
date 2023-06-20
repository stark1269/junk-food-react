import { styled } from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  font-size: 22px;
  font-family: 'Josefin Sans';
`;

export const Btn = styled.button`
  padding: 4px;
  border: 1px solid black;
  border-radius: 6px;
  color: black;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #aa2121;
  }
`;