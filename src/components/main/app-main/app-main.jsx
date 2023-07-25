import React from "react";
import styles from "./app-main.module.css"
import BurgerIngingredientsTab from "../burger-ingredients/burger-ingredients_tab/burger-ingredients_tab";
import BurgerIngredients from "../burger-ingredients/burger-ingredients/burger-ingredients";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorTotal from "../burger-constructor/burger-constructor-total/burger-constructor-total";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../../../src/utils/prop-types";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function AppMain({setClickOrderList }) {
  return (
    <main className={styles.main}>
      
      <section >
        <BurgerIngingredientsTab/>
        <div className={styles.main_ingredientBlock + " custom-scroll"}>
          <BurgerIngredients productName={"Булки"} typeProduct={"bun"} />
          <BurgerIngredients productName={"Соусы"} typeProduct={"sauce"} />
          <BurgerIngredients productName={"Начинки"} typeProduct={"main"} />
        </div>
      </section>  
      
      <section className={"pt-25"}>
        <>
          <BurgerConstructor index={0} />
          <BurgerConstructorTotal name={"Оформить заказ"} />
        </>
      </section>
  </main>
  )
}

AppMain.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  setClickIngredient: PropTypes.any,
  setIsOpen: PropTypes.any,
  setImageIngredient: PropTypes.any,
}

export default AppMain