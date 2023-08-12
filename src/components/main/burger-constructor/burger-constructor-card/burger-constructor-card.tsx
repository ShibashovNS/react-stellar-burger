import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveIngredients } from "../../../../services/store/reducers/burgerConstructorSlice";
import styles from "./burger-constructor-card.module.css";
import { TConstructorCard, TingredintsConstructor } from "../../../../utils/types";
import { number } from "prop-types";

export const BurgerConstruectorCard: FC<TConstructorCard> = memo(function BurgerConstruectorCard({
  data,
  handleDeliteElement,
  index,
}) {
  const { name, price, image_mobile, _id, _uuid } = data;
  const { draggedBun, draggedIngredients } = useSelector(
    (state:any) => state.constIngredient
  );

  const dispatch = useDispatch();

  const findIndex = (item:TingredintsConstructor) => {
    return draggedIngredients.indexOf(item);
  };

  // часть с ингредиентами в конструкторе
  const [{ isDragging }, refDrag] = useDrag({
    type: "card",
    item: { ingredient: data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "card",
    hover({ ingredient }:TConstructorCard) {
      if (ingredient._uuid === data._uuid) return;
     
      dispatch(
        moveIngredients({
          indexFrom: (findIndex(ingredient)),
          indexTo: index,
          ingredient: ingredient,
        })
      );
    },
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <div
      ref={(node) => dropRef(refDrag(node))}
      style={{ opacity }}
      className={styles.card}
    >
      <DragIcon type={"error"} />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image_mobile}
        handleClose={() => handleDeliteElement(_uuid)}
      />
    </div>
  );
});
