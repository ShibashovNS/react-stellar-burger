import { OrderCard } from "../../components/orderCard/orderCard";
import styles from "./orders.module.css";

export default function OrdersPage() {
  return (
    <section className={`${styles.orders} custom-scroll pr-2`}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </section>
  );
}
