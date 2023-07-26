import React from "react";
import styles from './burger-constructor-total.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { clickOpen, clickOrderList } from "../../../../services/store/reducers/modalOverlaySlice";
import { ingredientSelector } from "../../../../services/store/selectors/ingredientSelector";
import { clickDetails } from "../../../../services/store/reducers/orderDetailsSlice";
import { setDetails } from "../../../../services/store/reducers/detailsQuery";


function BurgerConstructorTotal({ name }) { 

  const {draggedBun, draggedIngredients} = useSelector(state => state.constIngredient)

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(clickDetails(true))
    dispatch(clickOpen(true))
    dispatch(setDetails([...draggedBun, ...draggedIngredients]))
  }

  return (
    <div className={styles.constructorTotal + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium">
          {
            draggedIngredients.reduce(function (acc, data) { return acc + data.price; }, 0)
            +
            (2 * draggedBun.reduce(function (acc, data) { return acc + data.price; }, 0))
          }
        </span>
        <CurrencyIcon/>
      </div>
      <Button onClick={onClick} htmlType="submit" type="primary" size="large">{ name }</Button>
    </div>
  )
}

export default BurgerConstructorTotal

