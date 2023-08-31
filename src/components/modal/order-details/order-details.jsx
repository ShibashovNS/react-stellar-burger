import React from "react";
import styles from "./order-details.module.css";
import image from "../../../../src/images/done.svg";
import { useSelector } from "react-redux";
import { sendOrder } from "../../../utils/api";
import Preloader from "../../preloder/preloder";

function OrderDetails() {
  const orderNumber = useSelector((state) => state.orderDetails.orderData);

 const isLoding =  useSelector((state) => state.orderDetails.isLoding)


  return (
    <div className={styles.order_details + " pt-30"}>
      <p
        className={styles.text_num + " shadow text text_type_digits-large pt-8"}
      >{
        !isLoding?orderNumber:""}
        
      </p>
      <p className={styles.text_order + " text_type_main-medium pt-8"}>{
        !isLoding?"идентификатор заказа":""}
      </p>
      <div className={styles.image_container}>
      {isLoding?<Preloader/>: <img className="mt-15" src={image} alt="Заказ оформлен" />}
      </div>
      <p className={styles.text_status + " text_type_main-default pt-15"}>
      {
        !isLoding?"ваш заказ начали готовить":""}
        
      </p>
      <p
        className={
          styles.text_end + " text_type_main-default text_color_inacti pt-2"
        }
      >{
        !isLoding?"Дождитесь готовности на орбитальной станции":""}
  
      </p>
    </div>
  );
}

export default OrderDetails;

