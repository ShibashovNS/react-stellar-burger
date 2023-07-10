import React from "react";
import styles from "./app-main.module.css"
import BurgerIngingredientsTab from "../burger-ingredients/burger-ingredients_tab/burger-ingredients_tab";
import BurgerIngredients from "../burger-ingredients/burger-ingredients/burger-ingredients";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorTotal from "../burger-constructor/burger-constructor-total/burger-constructor-total";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../../../src/utils/prop-types";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function AppMain({setClickOrderList, setClickIngredient, setIsOpen, setImageIngredient, ingredients}) {
  return (
    <main className={styles.main}>
      
      <section >
        <BurgerIngingredientsTab/>
        <div className={styles.main_ingredientBlock + " custom-scroll"}>
          <BurgerIngredients setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Булки"} typeProduct={"bun"} />
          <BurgerIngredients setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Соусы"} typeProduct={"sauce"} />
          <BurgerIngredients setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Начинки"} typeProduct={"main"} />
        </div>
      </section>  
      
      <section className={"pt-25"}>
        <>
          <BurgerConstructor ingredient={ingredients} index={0} />
          <BurgerConstructorTotal setClickOrderList={setClickOrderList} setIsOpen={ setIsOpen } ingredients={ingredients} name={"Оформить заказ"} />
        </>
      </section>
  </main>
  )
}

AppMain.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  setClickIngredient: PropTypes.func,
  setIsOpen: PropTypes.func,
  setImageIngredient: PropTypes.func,
}

export default AppMain