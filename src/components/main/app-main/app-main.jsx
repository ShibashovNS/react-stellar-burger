import React from "react";
import styles from "./app-main.module.css"
import BurgerIngingredientsTab from "../burger-ingredients/burger-ingredients_tab/burger-ingredients_tab";
import IngredientBlock from "../burger-ingredients/burger-ingredient-block/burger-ingredient-block";
import BurgerConstructor, { BurgerConstructorBottom, BurgerConstructorMiddle, BurgerConstructorTop } from "../burger-constructor/burger-constructor";
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorTotal from "../burger-constructor/burger-constructor-total/burger-constructor-total";

function AppMain({setClickIngredient, setIsOpen, setImageIngredient, ingredients}) {
  return (
    <main className={styles.main}>
      
      <section >
        <BurgerIngingredientsTab/>
        <div className={styles.main_ingredientBlock + " custom-scroll"}>
          <IngredientBlock setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Булки"} typeProduct={"bun"} />
          <IngredientBlock setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Соусы"} typeProduct={"sauce"} />
          <IngredientBlock setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} ingredients={ingredients} productName={"Начинки"} typeProduct={"main"} />
        </div>

      </section>  
      <section className={styles.main_constructorBlock +' pt-25 pl-4'}>
        <BurgerConstructorTop ingredient={ingredients} index={0} />
          <div className={styles.main_constructorMidleBlock + " custom-scroll pr-2"}>
            <BurgerConstructorMiddle ingredient={ingredients}/>
          </div>
        <BurgerConstructorBottom ingredient={ingredients} index={0} />
        <BurgerConstructorTotal ingredients={ingredients} name={ "Оформить заказ" } />
      </section>
  </main>
  )
}

export default AppMain