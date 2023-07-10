import React from 'react';
import styles from './burger-ingredient-card.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'; 
import IngredientDetails from '../../../modal/ingredient-details/ingredient-details';
import image from '../../../../../src/images/Rounded.svg'

function IngredientCard({setIsOpen, setClickIngredient, setImageIngredient, ingredient }) {

  const onClick = () => {
    setClickIngredient(true)
    setImageIngredient(ingredient)
    setIsOpen(true)
    console.log(ingredient.image)
    console.log(typeof (ingredient.image))
  }

  return (
    <div className={styles.card}>
      <Counter/>
      <img className={styles.image} src={ ingredient.image } onClick={onClick}/>
      <span className={"text_type_main-default pt-1 " + styles.price}>{ingredient.price}
        <CurrencyIcon />
      </span>  
      <p className={"text_type_main-default " + styles.name + ' pt-1'}>{ingredient.name}</p>
    </div>
  )
}

export default IngredientCard 