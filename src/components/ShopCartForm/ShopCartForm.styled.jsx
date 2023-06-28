// import { ErrorMessage } from "formik";
import { styled } from "styled-components";
import Autocomplete from "react-google-autocomplete";

export const AutocompleteInput = styled(Autocomplete)`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgc};
`;

export const Form = styled.form`
  top: 22px;
  padding: 22px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    position: sticky;
    width: 50%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-size: 22px;
  color: ${p => p.theme.colors.white};
`;

export const Span = styled.span`
  font-family: 'Josefin Sans';
  position: relative;
  &::after {
    content: '*';
    position: absolute;
    color: ${p => p.theme.colors.error};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgc};
`;

export const Btn = styled.button`
  padding: 6px;
  font-size: 22px;
  font-family: 'Josefin Sans';
  border: none;
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgc};
  transition: background-color 300ms linear;
  &:hover {
    background-color: ${p => p.theme.colors.current};
  }
`;

// export const Error = styled(ErrorMessage)`
// color: #aa2121;
// font-size: 16px;
// `;