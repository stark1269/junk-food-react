import { styled } from "styled-components";

export const Wrapp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  font-family: 'Josefin Sans';
  color: ${p => p.theme.colors.white};
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Josefin Sans';
  color: ${p => p.theme.colors.white};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  width: 100%;
  position: relative;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.bgc};
  @media (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.error};
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
  width: 46px;
  text-align: center;
  border-radius: 6px;
`;

export const IncrementBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  color: ${p => p.theme.colors.black};
  transition: background-color 300ms linear;
  &:hover {
    background-color: ${p => p.theme.colors.success};
  }
`;

export const DecrementBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  color: ${p => p.theme.colors.black};
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.error};
  }
`;