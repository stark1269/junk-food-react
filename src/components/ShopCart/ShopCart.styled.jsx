import { styled } from "styled-components";

export const Wrapp = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Title = styled.h2`
  font-size: 38px;
  font-family: 'Josefin Sans';
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Josefin Sans';
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  width: calc((100% - 16px) / 2);
  position: relative;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: #eeeeee7d;
`;

export const Button = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  background-color: transparent;
  color: #aa2121;
  font-size: 22px;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 6px;
`;

export const Input = styled.input`
  width: 34px;
  text-align: center;
  border-radius: 6px;
`;

export const IncrementBtn = styled.button`
  border-radius: 50%;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;

export const DecrementBtn = styled.button`
  border-radius: 50%;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #aa2121;
  }
`;