import { Link } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { OrderList } from "../orderIconList/orderIconList";
import styles from "./orderCard.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function OrderCard() {
  const ingredients = useAppSelector(ingredientSelector);
  return (
    <li className={styles.card}>
      <Link to={""} className={styles.link}>
        <div className={"mt-6 mr-6 ml-6 mb-6"}>
          <div className={styles.information}>
            <p className={"text text_type_digits-default"}>#034535</p>
            <p className={"text text_type_main-default text_color_inactive"}>
              Сегодня, 16:20 i-GMT+3
            </p>
          </div>
          <p className={"text text_type_main-medium mt-6"}>
            Death Star Starship Main бургер
          </p>

          <div className={`${styles.container} mt-6`}>
            <OrderList ingredients={ingredients} />
            <div className={`${styles.cost} ml-6`}>
              <p className={"text text_type_digits-default mr-2"}>545</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
