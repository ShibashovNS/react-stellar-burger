import React, {FC} from "react";
import styles from "./order-info-page.module.css";
import { OrderPage } from "../../components/order-page/order-page";

export const OrderInformation = ({modal}) => {

  return (
    <main className={`${styles.main} mt-15`}>
      <OrderPage modal={{modal}} />
    </main>
  );
};