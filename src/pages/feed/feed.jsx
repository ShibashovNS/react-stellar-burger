import { useEffect } from "react";
import { OrderStats } from "../../components/order-stats/order-stats";
import { OrderCard } from "../../components/orderCard/orderCard";
import { OrderList } from "../../components/orderIconList/orderIconList";
import styles from "./feed.module.css";
import { ORDERS_ALL } from "../../utils/api";
import { useAppDispatch } from "../../services/hooks/hooks";
import { wsConnecting, wsMessage } from "../../services/store/reducers/socket/actions";

export default function Feed() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(wsConnecting(ORDERS_ALL))
    
    return () => {
      closeWs();
    };
},[])

  return (
    <div className={styles.main}>
      <h1 className={"text text_type_main-large mb-5 mt-10"}>Лента заказов</h1>
      <section className={`${styles.orders} custom-scroll pr-2`}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </section>
      <div className={styles.stats}>
        <OrderStats />
      </div>
    </div>
  );
}
