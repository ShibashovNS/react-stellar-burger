import React, { createRef } from "react";
import {useEffect, useRef, useState} from 'react';
import styles from "./app-main.module.css"
import BurgerIngingredientsTab from "../burger-ingredients/burger-ingredients_tab/burger-ingredients_tab";
import BurgerIngredients from "../burger-ingredients/burger-ingredients/burger-ingredients";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorTotal from "../burger-constructor/burger-constructor-total/burger-constructor-total";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../../../src/utils/prop-types";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeTab } from "../../../services/store/reducers/ingredientsTab";

function AppMain() {

  const dispatch = useDispatch()

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const current = useSelector((state) => state.ingredientsTab.typeTab)

  function handleTabClick(type) {
    dispatch(changeTypeTab(type))

    switch (type) {
      case "bun":
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      
      case "sauce":
          sauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      
      case "main":
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  function handleTab(evt) {
    const target = evt.target;
    const scrollTop = target.scrollTop;
    const sauceScroll = sauceRef.current.getBoundingClientRect().y - bunRef.current.getBoundingClientRect().y - 40;
    const mainScroll = mainRef.current.getBoundingClientRect().y - bunRef.current.getBoundingClientRect().y - 40;

    if (scrollTop >= mainScroll) {
      dispatch(changeTypeTab("main"))
     } else if (scrollTop < sauceScroll) {
      dispatch(changeTypeTab("bun")) 
     } else {
      dispatch(changeTypeTab("sauce"))
    }
  }
  
  return (
    <main className={styles.main} >
      
      <section >
        <BurgerIngingredientsTab current={current} handleTabClick={handleTabClick} />
        
        <div className={styles.main_ingredientBlock + " custom-scroll"} onScroll={handleTab} >
          <div ref={bunRef}>
          <BurgerIngredients productName={"Булки"} typeProduct={"bun"} />
          </div>
          <div ref={sauceRef}>
            <BurgerIngredients productName={"Соусы"} typeProduct={"sauce"} />
          </div>
          <div ref={mainRef}>
            <BurgerIngredients productName={"Начинки"} typeProduct={"main"} />
          </div>
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