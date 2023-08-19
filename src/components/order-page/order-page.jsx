import React, {FC} from "react";
import styles from "./order-page.module.css";

import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { OrderList } from "../orderIconList/orderIconList";


export const OrderPage = ({ modal = false }) => {
  const ingredients = useAppSelector(ingredientSelector);
  const done = 'done';

  return (
    <section className={`${styles.container} mt-15 mb-10 mr-10 ml-10`}>
      <p className={`text text_type_digits-default ${!modal && styles.number}`}>{`#123123123`}</p>
      <p className={"text text_type_main-medium mt-10"}>Название заказа</p>
      <p className={`text text_type_main-default mt-3 ${done && styles.status}`}>{done ? 'Выполнен' :'Готовится'}</p>
      <p className={"text text_type_main-medium mt-15 mb-6"}>Состав:</p>
      <OrderList ingredients={ingredients} />
      <div className={`${styles.footer} mt-10`}>
        <p className={"text text_type_main-default text_color_inactive"}>Дата</p>
        <div className={styles.total}>
          <p className={"text text_type_digits-default mr-2"}>100500р</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
