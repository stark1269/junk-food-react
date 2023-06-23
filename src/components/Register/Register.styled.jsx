import { Form as FormikForm, Field as FormikField, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

export const Input = styled(FormikField)`
  font-size: 22px;
  padding: 8px;
  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  color: #000000;
`;

export const Span = styled.span`
  position: relative;
  &::after {
    content: '*';
    position: absolute;
    color: #aa2121;
  }
`;

export const Btn = styled.button`
  padding: 8px;
  font-size: 22px;
  border-radius: 6px;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;

export const Error = styled(ErrorMessage)`
color: #aa2121;
font-size: 18px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const RegLink = styled(Link)`
  color: #2b7b0c;
  font-size: 22px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 0;
  font-size: 24px;
  border: none;
  color: black;
  background-color: transparent;
`;