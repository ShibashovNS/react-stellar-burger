import React, {FC} from "react";
import styles from "./order-info-page.module.css";
import { OrderPage } from "../../components/order-page/order-page";

export const OrderInformation = () => {

  return (
    <main className={`${styles.main} mt-15`}>
      <OrderPage />
    </main>
  );
};