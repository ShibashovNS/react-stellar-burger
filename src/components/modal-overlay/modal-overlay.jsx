import React from 'react';
import styles from './modal-overlay.module.css'
import ReactDom, { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { clickOpen } from '../../services/store/reducers/modalOverlaySlice';

const overlayRoot = document.getElementById('react-modal')

function ModalOverlay() {

  const dispatch = useDispatch()
  
  const onClick = () => {
    dispatch(clickOpen(false))
  }

  return(
      <div className={styles.overlay} onClick={onClick}></div>
  )
}

export default ModalOverlay