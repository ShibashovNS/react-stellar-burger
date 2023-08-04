import { useNavigate } from "react-router-dom";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";

function ForgotPassword() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className="mb-6">
          <EmailInput
            name="email"
            placeholder="Укажите e-mail"
            value
            onChange
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
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default ForgotPassword;
