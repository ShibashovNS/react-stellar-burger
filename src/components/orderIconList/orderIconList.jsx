import React, {FC} from "react";
import styles from "./orderIconList.module.css";
import { IngredientsIcon } from "../IngredientsIcon/IngredientsIcon";



export const OrderList = ({ ingredients, shift = true }) => {

  const listsIconOrder = ingredients.length > 6 ? ingredients.slice(0, 6) : ingredients;
   
  const remains = ingredients.length > 6 && ingredients.length - 6;

  console.log(listsIconOrder)
  
  return (
    <ul className={shift === true ? styles.list: styles.icon}>
      {
        listsIconOrder.map((ingredient, index) => (
          <li key={index}>
              <IngredientsIcon ingredient={ingredient} index={index} shift={shift} remains={remains} />
          </li>
        ))
      }
    </ul>
  );
};