import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../utils/api";

export const Register = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch()

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  
    console.log(userData);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  const onClick = () => {
    dispatch(registerUser(userData));
  }
  

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="name"
            onChange={onChange}
            value={userData?.name || ""}
            name="name"
          />
        </div>
        <div className="mb-6">
          <EmailInput
            name="email"
            onChange={onChange}
            value={userData.email || ""}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            onChange={onChange}
            value={userData?.password || ""}
            type="password"
            name="password"
            autoComplete="on"
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          onClick={onClick}
      >
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link to={'/login'} className={styles.link}> Войти</Link>
      </p>
    </div>
  );
};
