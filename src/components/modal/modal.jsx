import React from 'react';
import styles from './modal.module.css';
import ReactDom, { createPortal } from 'react-dom';
import OrderDetails from './order-details/order-details';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from './ingredient-details/ingredient-details';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modal')

function Modal({ setIsOpen, children }) {
  
  React.useEffect(() => {
    function onEsc(event) {
      if (event.code === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onEsc);

    return () => document.removeEventListener('keydown', onEsc)
  }, [])
  
  const onClick = () => {
    setIsOpen(false)
  }

  return ReactDom.createPortal(
    (
      <div className={styles.modal}>
        <div className={styles.close_icon}><CloseIcon onClick={onClick}/></div>
        {children}
      </div>
    ), modalRoot
  )
}

export default Modal