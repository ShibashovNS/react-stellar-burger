import React from 'react';
import styles from './modal.module.css';
import ReactDom, { createPortal } from 'react-dom';
import OrderDetails from './order-details/order-details';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useDispatch } from 'react-redux';
import { clickOpen, clickOrderList } from '../../services/store/reducers/modalOverlaySlice';
import { clickDetails } from '../../services/store/reducers/orderDetailsSlice';


const modalRoot = document.getElementById('react-modal')

function Modal({ children }) {
  
  const dispatch = useDispatch()

  React.useEffect(() => {
    function onEsc(event) {
      if (event.code === 'Escape') {
        dispatch(clickOpen(false))
        dispatch(clickDetails(false))
      }
    }
    document.addEventListener('keydown', onEsc);

    return () => document.removeEventListener('keydown', onEsc)
  }, [])
  
  const onClick = () => {
    dispatch(clickOpen(false))
    dispatch(clickDetails(false))
  }

  return ReactDom.createPortal(
    (
      <>
      <div className={styles.modal}>
        <div className={styles.close_icon}><CloseIcon onClick={onClick}/></div>
        {children}
      </div>
        <ModalOverlay/>
      </>
    ), modalRoot
  )
}

export default Modal