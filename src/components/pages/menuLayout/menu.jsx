import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { UserForm } from "../userForm/userForm";
import React, { useState } from "react";
import { logoutUser } from "../../../utils/api";


export default function MenuPage() {
  
  const dispatch = useDispatch()


  
  
  const logout = () => {
    dispatch(logoutUser())
  }

  const styleLink = (isActive) =>
    `${styles.link}${(isActive && ` ${styles.link_active}`) || ""}`
  
  return (
    <>
      <nav className={`${styles.nav} mr-15 mt-20`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
               className={({ isActive }) =>
               styleLink(isActive) + " text text_type_main-medium text_color_inactive"}
              activeClassName={styles.active}
              to="/profile/"
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
               className={({ isActive }) =>
               styleLink(isActive) + " text text_type_main-medium text_color_inactive"}
              activeClassName={styles.active}
              to="/profile/orders"
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <Button
              className={`${styles.logout} text text_type_main-medium text_color_inactive`}
              onClick={logout}
            >
              Выход
            </Button>
          </li>
        </ul>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
    </>
  );
}
