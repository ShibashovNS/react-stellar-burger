import React, { memo, useCallback, useState } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  addBun,
  addIngredient,
  deliteIngredient,
  removeList,
} from "../../../services/store/reducers/burgerConstructorSlice";
import { v4 as uuidv4 } from "uuid";
import { BurgerConstruectorCard } from "./burger-constructor-card/burger-constructor-card";

const BurgerConstructor = memo(function BurgerConstructor({ data, index }) {
  const dispatch = useDispatch();
  const { draggedBun, draggedIngredients } = useSelector(
    (state) => state.constIngredient
  );
  const { selctIngredient, clickStutus, count } = useSelector(
    (state) => state.ingredDetails
  );

  const { bun, ingredients, isLoding } = useSelector(
    (state) => state.ingredients
  );

  const [{ isDropped }, refDrop] = useDrop({
    accept: "ingredient",
    drop(item) {
      const itemWithUuId = {
        ...item,
        _uuid: uuidv4(),
      };
      {
        item.type === "bun"
          ? dispatch(addBun(itemWithUuId))
          : dispatch(addIngredient(itemWithUuId));
      }
    },
    collect: (monitor) => ({
      isDropped: monitor.isOver(),
    }),
  });

  const [, drop] = useDrop(() => ({ accept: "card" }));

  const handleDeliteElement = useCallback((uuid) => {
    dispatch(deliteIngredient(uuid));
  });

  return (
    <div ref={refDrop}>
      <div className={styles.bun + " pl-6 pt-4 pb-4"}>
        {draggedBun.map((item) => {
          return (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={item.name + " (Верх)"}
              price={item.price}
              thumbnail={item.image}
              key={item._uuid}
            />
          );
        })}
      </div>

      <div className={styles.itemMidle + " custom-scroll pr-2"}>
        {draggedIngredients
          .filter((card) => card.type !== "bun")
          .map((card, index) => {
            return (
              <BurgerConstruectorCard
                key={card._uuid}
                index={index}
                data={card}
                handleDeliteElement={handleDeliteElement}
              />
            );
          })}
      </div>

      <div className={styles.bun + " pl-6 pt-4"}>
        {draggedBun.map((item) => {
          return (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={item.name + " (Низ)"}
              price={item.price}
              thumbnail={item.image}
              key={item._uuid}
            />
          );
        })}
      </div>
    </div>
  );
});

export default BurgerConstructor;
