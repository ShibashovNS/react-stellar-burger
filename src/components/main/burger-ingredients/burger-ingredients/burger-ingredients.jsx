import React from "react";
import styles from "./burger-ingredients.module.css";
import IngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../../../src/utils/prop-types";
import { useSelector } from "react-redux";
import { memoIngredientsSelector } from "../../../../services/store/selectors/memoIngredientSelector";
import { Link, useLocation } from "react-router-dom";

function BurgerIngredients({ productName, typeProduct }) {
  const ingredients = useSelector(memoIngredientsSelector);
  const location = useLocation();

  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngredientBlock + " pt-6 pb-10 pl-4 pr-4"}>
        {ingredients
          .filter((item) => item.type === typeProduct)
          .map((item) => {
            return <Link className={styles.link} key={item._id} to={`profile/orders/${item._id}`} state={{ background: location }}> <IngredientCard key={item._id} ingredient={item}/> </Link>;
          })}
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
};

export default BurgerIngredients;
