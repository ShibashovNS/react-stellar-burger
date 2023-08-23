import React, { FC } from "react";
import styles from "./orderIconList.module.css";
import { IngredientsIcon } from "../IngredientsIcon/IngredientsIcon";

export const OrderList = ({ ingredients, shift = true }) => {
  const uniqueIngredients = ingredients.filter((item, index) => {
    return ingredients.indexOf(item) === index;
  });

  const listsIconOrder =
    uniqueIngredients.length > 6
      ? uniqueIngredients.slice(0, 6)
      : uniqueIngredients;

  const remains = uniqueIngredients.length > 6 && uniqueIngredients.length - 6;

  function countDuplicates(arr) {
    return arr.reduce((counts, current) => {
      counts[current] = (counts[current] || 0) + 1;
      return counts;
    }, {});
  }

  const count = countDuplicates(ingredients);

  return (
    <ul
      className={shift === true ? styles.list : styles.icon + " custom-scroll"}
    >
      {listsIconOrder.map((ingredient, index) => (
        <li key={index}>
          <IngredientsIcon
            count={count[`${ingredient}`]}
            ingredient={ingredient}
            index={index}
            shift={shift}
            remains={remains}
          />
        </li>
      ))}
    </ul>
  );
};
