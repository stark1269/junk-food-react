import { styled } from "styled-components";

export const Wrapp = styled.div`
  width: 50%;
`;

export const List = styled.ul`
  width: 100%;
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  width: calc((100% - 16px) / 2);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: #eeeeee7d;
`;