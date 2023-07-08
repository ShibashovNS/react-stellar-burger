import React from 'react';
import styles from './ingredient-details.module.css'
import image from '../../../../src/images/done.svg'
import { string } from 'prop-types';

function IngredientDetails({ imageIngredient }) {
  console.log(imageIngredient)
  return (
    <>
      <div className={styles.ingredientDetails + ' pt-30'}>
      <p className={styles.ingredientDetails_title + " text_type_main-large pt-10 pl-10"}>Детали ингредиента</p>
      <img src={`${imageIngredient.image_large}`} alt=""/>
      <p className={styles.text + " text_type_main-medium pt-4"}>{imageIngredient.name}</p>
      <ul className={styles.table + " pt-8"}>
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Калории,ккал</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngredient.calories}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Белки, г</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngredient.proteins}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Жиры, г</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngredient.fat}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Углеводы, г</p>
            <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngredient.carbohydrates}</p>
          </li>    
      </ul>
    </div>
      </>
  )
}

export default IngredientDetails