import { Form as FormikForm, Field } from "formik";
import { styled } from "styled-components";

export const Form = styled(FormikForm)`
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
`;

export const Input = styled(Field)`
  width: 100%;
`;

export const Btn = styled.button`
  border-radius: 6px;
`;