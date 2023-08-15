import React from "react";
import styles from "./modal.module.css";
import ReactDom, { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {
  clickOpen,
  clickOrderList,
} from "../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../services/store/reducers/orderDetailsSlice";
import { useNavigate } from "react-router-dom";
import { TWithChildren } from "../../utils/types";
import { useAppDispatch } from "../../services/hooks/hooks";

const modalRoot = document.getElementById("react-modal")!;

function Modal({ children }: TWithChildren<unknown>) {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
    dispatch(clickOpen(false));
    dispatch(clickDetails(false));
  };

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    function onEsc(event: KeyboardEvent) {
      if (event.code === "Escape") {
        closeModal();
        navigate("/");
      }
    }
    document.addEventListener("keydown", onEsc);

    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return ReactDom.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.close_icon}>
          <CloseIcon onClick={closeModal} type={"primary"} />
        </div>
        {children}
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>,
    modalRoot
  );
}

export default Modal;
