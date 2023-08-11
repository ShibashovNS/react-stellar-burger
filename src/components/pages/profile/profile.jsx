import React, { useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import styles from "./profile.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ordersHistory from "../ordersHistory/ordersHistory";

import orders from "../orders/orders";
import MenuPage from "../menuLayout/menu";
import OrdersHistory from "../ordersHistory/ordersHistory";
import { UserForm } from "../userForm/userForm";
import AppHeader from "../../header/app-header/app-header";

export default function Profile() {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
    <main className={styles.page}>
      <MenuPage/>
        <Outlet/>
      </main>
    </>
  );
}