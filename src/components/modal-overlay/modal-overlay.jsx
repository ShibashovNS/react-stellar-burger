import React from 'react';
import styles from './modal-overlay.module.css'
import { useDispatch } from 'react-redux';
import { clickOpen } from '../../services/store/reducers/modalOverlaySlice';
import { clickDetails } from '../../services/store/reducers/orderDetailsSlice';

function ModalOverlay() {

  const dispatch = useDispatch()
  
  const onClick = () => {
    dispatch(clickOpen(false))
    dispatch(clickDetails(false))
  }

  return(
      <div className={styles.overlay} onClick={onClick}></div>
  )
}

export default ModalOverlay