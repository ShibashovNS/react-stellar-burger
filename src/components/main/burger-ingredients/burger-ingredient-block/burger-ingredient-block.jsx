import React from "react";
import styles from "./burger-ingredient-block.module.css"
import IngredientCard from "../burger-ingredient-card/burger-ingredient-card";


function IngredientBlock({setIsOpen, setClickIngredient, setImageIngredient, ingredients, productName, typeProduct}) { 
  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngredientBlock + " pt-6 pb-10 pl-4 pr-4"}>
      {ingredients.filter(item => item.type === typeProduct).map(item => {
        return (
            <IngredientCard setIsOpen={setIsOpen} setClickIngredient={setClickIngredient} setImageIngredient={setImageIngredient} key={item._id} ingredient={item} />
          )
      })}
      </div>
    </>
  )
}

export default IngredientBlock