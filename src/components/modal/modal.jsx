import React from "react";
import styles from "./modal.module.css";
import ReactDom, { createPortal } from "react-dom";
import OrderDetails from "./order-details/order-details";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useDispatch } from "react-redux";
import {
  clickOpen,
  clickOrderList,
} from "../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../services/store/reducers/orderDetailsSlice";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("react-modal");

function Modal({ children }) {
const navigate = useNavigate()
  const closeModal = () => {
    navigate('/')
    dispatch(clickOpen(false));
    dispatch(clickDetails(false));
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    function onEsc(event) {
      if (event.code === "Escape") {
        closeModal();
        navigate('/')
      }
    }
    document.addEventListener("keydown", onEsc);

    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return ReactDom.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.close_icon}>
          <CloseIcon onClick={closeModal} />
        </div>
        {children}
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>,
    modalRoot
  );
}

export default Modal;
