import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css"
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../utils/api";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState({})

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  const onClick = () => {
    dispatch(loginUser(value));
  }


  return (
    <div className={styles.container}>
    <h2 className={`text text_type_main-medium mb-6`} onClick={onClick}>Вход</h2>
    
    <form className={styles.form} onSubmit={onSubmit} >
      <div className="mb-6">
      <EmailInput
        onChange={onChange}
        value={value.email || ""}
        name={'email'}
        isIcon={false}
      />
      </div>
      <div className="mb-6">
      <PasswordInput
        onChange={onChange}
        value={value?.password || ""}
        name="password"
        extraClass="mb-2"
          />
      </div>
      <Button type="primary" size="large" onClick={onClick}>Войти</Button>
    </form>

    <p className="text text_type_main-default text_color_inactive mt-20">Вы— новый пользователь?
      <Link to={'/register'} className={styles.link}> Зарегистрироваться</Link>
    </p>

    <p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль?
      <Link to={'/forgot-password'} className={styles.link}> Восстановить пароль</Link>
    </p>
  </div>
);
}