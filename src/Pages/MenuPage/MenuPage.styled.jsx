import { styled } from "styled-components";

export const Wrapp = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;