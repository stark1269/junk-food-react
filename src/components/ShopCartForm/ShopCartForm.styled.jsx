import { Form as FormikForm, Field, ErrorMessage } from "formik";
import { styled } from "styled-components";

export const Form = styled(FormikForm)`
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

export const Input = styled(Field)`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
`;

export const Error = styled(ErrorMessage)`
color: #aa2121;
font-size: 16px;
`;

export const Btn = styled.button`
  padding: 6px;
  font-size: 22px;
  font-family: 'Josefin Sans';
  border: 3px solid black;
  border-radius: 6px;
  color: black;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;