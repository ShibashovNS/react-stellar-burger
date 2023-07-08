import React from 'react';
import styles from './overlay.module.css'
import ReactDom, { createPortal } from 'react-dom';

const overlayRoot = document.getElementById('react-modal')

function Overlay({setClickOrderList, setIsOpen}) {

  const onClick = () => {
    setIsOpen(false)
    setClickOrderList(false)
  }

  return ReactDom.createPortal(
    (
      <div className={styles.overlay} onClick={onClick}></div>
    ), overlayRoot
  )
}

export default Overlay