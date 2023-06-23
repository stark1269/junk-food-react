import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.8);;
`;

export const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
height: 250px;
padding: 18px;
border-radius: 6px;
background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Btn = styled.button`
  border-radius: 6px;
  padding: 4px;
  font-weight: 500;
  border: none;
  background-color: #eeeeee7d;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: white;
    background-color: #2b7b0c;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 24px;
  font-family: 'Josefin Sans';
`;