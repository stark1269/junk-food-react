import { styled } from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 22px;
  padding: 22px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;