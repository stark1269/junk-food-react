import { Form as FormikForm, Field as FormikField, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: ${p => p.theme.colors.white};
`;

export const Span = styled.span`
  position: relative;
  &::after {
    content: '*';
    position: absolute;
    color: ${p => p.theme.colors.error};
  }
`;

export const Btn = styled.button`
  padding: 8px;
  font-size: 22px;
  border-radius: 6px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.4) inset;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.current};
  }
`;

export const Error = styled(ErrorMessage)`
color: ${p => p.theme.colors.error};
font-size: 18px;
font-weight: 700;
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
  color: ${p => p.theme.colors.success};
  font-size: 22px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 0;
  font-size: 24px;
  border: none;
  color: ${p => p.theme.colors.black};
  background-color: transparent;
`;