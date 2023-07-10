import React from "react";
import styles from "./app-header.module.css"
import HeaderList from "../header-list/header-list";

function AppHeader({setClickOrderList, setIsOpen}) {
  return (
    <header className={styles.header}>
      <HeaderList setClickOrderList={setClickOrderList} setIsOpen={ setIsOpen } />
    </header>
  )
}

export default AppHeader