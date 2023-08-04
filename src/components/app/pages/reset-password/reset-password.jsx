import { useNavigate } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./reset-password.module.css";

function ResetPassword() {
  const navigate = useNavigate();

  return (
    <>
      <PasswordInput
        name="password"
        placeholder="Введите новый пароль"
        value
        onChange
      />
      
      <Input
        type="text"
        name="token"
        placeholder="Введите код из письма"
        value
        onChange
      />
      <Button htmlType="submit" type="primary" size="medium">
        Сохранить
      </Button>

      <div className={styles.text}>
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
    </>
  );
}

export default ResetPassword;
