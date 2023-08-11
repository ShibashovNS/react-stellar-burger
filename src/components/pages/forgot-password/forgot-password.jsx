import { useNavigate } from "react-router-dom";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../utils/api";

function ForgotPassword() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    console.log(userData);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(forgotPassword(userData));
  };

  const onClick = () => {
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <h1 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <EmailInput
            name="email"
            placeholder="Укажите e-mail"
            value={userData.email || ""}
            onChange={onChange}
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
      </form>

      <div className={"text text_type_main-default text_color_inactive mt-20"}>
        <span>Вспомнили пароль?</span>
        <Button
          extraClass={styles.link}
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={onClick}
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default ForgotPassword;
