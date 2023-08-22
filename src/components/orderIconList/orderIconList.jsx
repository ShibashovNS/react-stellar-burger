import React, {FC} from "react";
import styles from "./orderIconList.module.css";
import { IngredientsIcon } from "../IngredientsIcon/IngredientsIcon";



export const OrderList = ({ ingredients }) => {

  const listsIconOrder = ingredients.length > 6 ? ingredients.slice(0, 6) : ingredients;
  const remains = ingredients.length > 6 && ingredients.length - 6;

  console.log(listsIconOrder)
  
  return (
    <ul className={styles.list}>
      {
        listsIconOrder.map((ingredient, index) => (
          <li key={index}>
            <IngredientsIcon ingredient={ingredient} index={index} shift={true} remains={remains} />
          </li>
          
        ))
      }
    </ul>
  );
};