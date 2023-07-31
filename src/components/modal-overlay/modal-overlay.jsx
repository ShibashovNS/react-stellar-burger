import React from "react";
import styles from "./modal-overlay.module.css";
import { useDispatch } from "react-redux";
import { clickOpen } from "../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../services/store/reducers/orderDetailsSlice";

function ModalOverlay({ closeModal }) {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}

export default ModalOverlay;
