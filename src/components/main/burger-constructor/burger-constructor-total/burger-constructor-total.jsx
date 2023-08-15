import React, { useCallback, useMemo } from "react";
import styles from "./burger-constructor-total.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/hooks/hooks";
import {
  clickOpen,
  clickOrderList,
} from "../../../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../../../services/store/reducers/orderDetailsSlice";
import { setDetails } from "../../../../services/store/reducers/detailsQuery";
import { clearOrder } from "../../../../services/store/reducers/burgerConstructorSlice";

function BurgerConstructorTotal({ name }) {
  const { draggedBun, draggedIngredients } = useAppSelector(
    (state) => state.constIngredient
  );

  const isDisabled = useAppSelector((store) => store.userStatus.user)

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(clickDetails(true));
    dispatch(clickOpen(true));
    dispatch(setDetails([...draggedBun, ...draggedIngredients]));
    dispatch(clearOrder([]))
  };

  return (
    <div className={styles.constructorTotal + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium">
          {draggedIngredients.reduce(function (acc, data) {
            return acc + data.price;
          }, 0) +
            2 *
              draggedBun.reduce(function (acc, data) {
                return acc + data.price;
              }, 0)}
        </span>
        <CurrencyIcon />
      </div>
      <Button disabled={([...draggedBun, ...draggedIngredients].length<=0) || !isDisabled} onClick={onClick} htmlType="submit" type="primary" size="large">
        {name}
      </Button>
    </div>
  );
}

export default BurgerConstructorTotal;
