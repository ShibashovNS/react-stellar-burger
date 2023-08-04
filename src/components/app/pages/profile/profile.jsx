import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./profile.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Profile() {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <main className={styles.page}>
      <nav className={`${styles.nav} mr-15 mt-20`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.logout} text text_type_main-medium text_color_inactive`}
              onClick
            >
              Выход
            </button>
          </li>
        </ul>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <div className={styles.container + " mr-15 mt-20"}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className="mb-6">
            <Input type="text" placeholder="name" onChange value name="name" />
          </div>
          <div className="mb-6">
            <EmailInput name="email" onChange value />
          </div>
          <div className="mb-6">
            <PasswordInput
              onChange
              value
              type="password"
              name="password"
              autoComplete="on"
            />
          </div>
          <Button type="secondary">отмена</Button>
          <Button htmlType="submit" type="primary" size="medium" onClick>
            сохранить
          </Button>
        </form>
      </div>
    </main>
  );
}
