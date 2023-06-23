import { useNavigate } from "react-router-dom";
import { Backdrop, Modal, BtnWrap, Wrapper, Btn, Text } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const RestModal = ({ setIsModalOpen, setShopCart }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    setIsModalOpen(false)
    navigate('/shop-cart');
  };

  const closeAndCrashCart = () => {
    setIsModalOpen(false)
    setShopCart([]);
  };

  return createPortal(
    <Backdrop>
      <Modal>
        <Wrapper>
          <Text>You already have food from another restaurant in your cart. Do you want to start a new order or go back to a previous one?</Text>
          <BtnWrap>
            <Btn onClick={navigateToCart}>Go back to the previous</Btn>
            <Btn onClick={closeAndCrashCart}>Start a new order</Btn>
          </BtnWrap>
        </Wrapper>
      </Modal>
    </Backdrop>, modalRoot)
};