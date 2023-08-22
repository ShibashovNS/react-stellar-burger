import React, {FC, useEffect} from "react";
import styles from "./order-page.module.css";

import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { OrderList } from "../orderIconList/orderIconList";
import { useParams } from "react-router-dom";
import { allOrdersInf } from "../../services/store/selectors/wsSelectors/allOrders";
import { connect, wsClose } from "../../services/store/reducers/socket/actions";
import { ORDERS_ALL } from "../../utils/api";



export const OrderPage = ({ modal = false }) => {
  const dispatch = useAppDispatch();
  const ordersInf = useAppSelector(allOrdersInf);
  const ordersData = ordersInf && ordersInf.orders;
  const ingredientsData = useAppSelector(ingredientSelector);
  const { id: _id } = useParams();

  useEffect(() => {
    dispatch(connect(ORDERS_ALL));

    return () => {
      wsClose();
    };
  }, []);

  const done = 'done';

  return (
    <section className={`${styles.container} mt-15 mb-10 mr-10 ml-10`}>
      <p className={`text text_type_digits-default ${!modal && styles.number}`}>{`#123123123`}</p>
      <p className={"text text_type_main-medium mt-10"}>Название заказа</p>
      <p className={`text text_type_main-default mt-3 ${done && styles.status}`}>{done ? 'Выполнен' :'Готовится'}</p>
      <p className={"text text_type_main-medium mt-15 mb-6"}>Состав:</p>
      <OrderList ingredients={ordersData} />
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
