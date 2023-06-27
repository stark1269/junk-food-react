// import { ErrorMessage } from "formik";
import { styled } from "styled-components";
import Autocomplete from "react-google-autocomplete";

export const AutocompleteInput = styled(Autocomplete)`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
`;

export const Form = styled.form`
  position: sticky;
  top: 22px;
  padding: 22px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-radius: 12px;
  width: 50%;
  height: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-size: 22px;
`;

export const Span = styled.span`
  font-family: 'Josefin Sans';
  position: relative;
  &::after {
    content: '*';
    position: absolute;
    color: #aa2121;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
`;

// export const Error = styled(ErrorMessage)`
// color: #aa2121;
// font-size: 16px;
// `;

export const Btn = styled.button`
  padding: 6px;
  font-size: 22px;
  font-family: 'Josefin Sans';
  border: none;
  border-radius: 6px;
  background-color: #eeeeee7d;
  transition: color 300ms linear, background-color 300ms linear;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.4) inset;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;