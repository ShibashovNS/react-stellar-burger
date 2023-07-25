import React from "react";
import styles from "./burger-ingredients.module.css"
import IngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../../../../src/utils/prop-types";
import { useSelector } from "react-redux";
import { ingredientSelector } from "../../../../services/store/selectors/ingredientSelector";
import { memoIngredientsSelector } from "../../../../services/store/selectors/memoIngredientSelector";



function BurgerIngredients({ productName, typeProduct }) { 
  
  const ingredients = useSelector(memoIngredientsSelector)

  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngredientBlock + " pt-6 pb-10 pl-4 pr-4"}>
        {ingredients.filter(item => item.type === typeProduct).map(item => {
        return (
            <IngredientCard key={item._id} ingredient={item} />
        )
      })}
      </div>
    </>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  setIsOpen: PropTypes.any,
  setClickIngredient: PropTypes.any,
  setImageIngredient: PropTypes.any,
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
}

export default BurgerIngredients