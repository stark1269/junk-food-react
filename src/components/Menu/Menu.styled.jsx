import { styled } from "styled-components";

export const List = styled.ul`
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: calc(70% - 20px);
  border: black 1px solid;
  border-radius: 12px;
`;

export const Item = styled.li`
  width: calc((100% - 24px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;