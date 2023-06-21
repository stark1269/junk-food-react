import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: calc(70% - 20px);
`;

export const Item = styled.li`
  padding: 12px;
  width: calc((100% - 24px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: #eeeeee7d;
`;