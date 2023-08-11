import { useNavigate } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./reset-password.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { resetPassword } from "../../../utils/api";

function ResetPassword() {
  const [value, setValue] = useState({})

  console.log(value)

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(value))
  };

  return (
    <div className={styles.container}>
      <h1 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <PasswordInput
            name="password"
            placeholder="Введите новый пароль"
            value={value?.password || ""}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            name="token"
            placeholder="Введите код из письма"
            value={value?.token || ""}
            onChange={onChange}
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </form>

      <div className={styles.text + " text text_type_main-default text_color_inactive mt-20"}>
        <span>Вспомнили пароль?</span>
        <Button
          extraClass={styles.link}
          htmlType="button"
          type="secondary"
          size="medium"
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;