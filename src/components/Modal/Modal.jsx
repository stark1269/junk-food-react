import { useNavigate } from "react-router-dom";
import { Backdrop, Modal } from "./Modal.styled";
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
        <h2>Shopping cart is not empty</h2>
        <button onClick={navigateToCart}>Navigate</button>
        <button onClick={closeAndCrashCart}>Close</button>
      </Modal>
    </Backdrop>, modalRoot)
};