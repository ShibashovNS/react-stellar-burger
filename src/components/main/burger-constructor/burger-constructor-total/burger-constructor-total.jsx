import React from "react";
import styles from './burger-constructor-total.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorTotal({ingredients, name}) {
  return (
    <div className={styles.constructorTotal + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium">
          {ingredients.reduce(function (acc, data) { return acc + data.price; }, 0)}
        </span>
        <CurrencyIcon/>
      </div>
      <Button htmlType="button" type="primary" size="large">{ name }</Button>
    </div>
  )
}

export default BurgerConstructorTotal

