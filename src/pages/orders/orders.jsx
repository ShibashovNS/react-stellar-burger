import {FC, useEffect, useMemo} from 'react';
import { OrderCard } from "../../components/orderCard/orderCard";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { allOrdersInf } from "../../services/store/selectors/wsSelectors/allOrders";
import styles from "./orders.module.css";
import { connect, wsClose } from "../../services/store/reducers/socket/actions";
import { ORDERS, ORDERS_ALL } from "../../utils/api";

export default function OrdersPage() {
  const dispatch = useAppDispatch();
  const ordersInf = useAppSelector(allOrdersInf);
  const ordersData = ordersInf && ordersInf.orders;
  const ingredientsData = useAppSelector(ingredientSelector);

  const accessToken = useMemo(
    () => (
      localStorage.getItem("accessToken")?.replace('Bearer ', '')
    ), [localStorage.getItem("accessToken")]);
      
  function price(item) {
    let totalPrice = 0;
    if (item) {
      item.ingredients.forEach((ingrAll) => {
        ingredientsData.forEach((itemData) => {
          if (itemData._id === ingrAll) {
            totalPrice += itemData.type === "bun" && itemData.price * 2;
          }
        });
      });
    }
    return totalPrice;
  }

  useEffect(() => {
    dispatch(connect(`${ORDERS}?token=${accessToken}`));

    return () => {
      wsClose();
    };
  }, []);

  return (
    ordersData &&
      <section className={`${styles.orders} custom-scroll pr-2`}>
        {ordersData.map((item) => (
          <OrderCard key={item._id} ordersData={item} price={price(item)} />
        ))}
      </section>
  );
}
