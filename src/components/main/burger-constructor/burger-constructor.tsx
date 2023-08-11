import React, { memo, useCallback, useState } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  addBun,
  addIngredient,
  deliteIngredient,
} from "../../../services/store/reducers/burgerConstructorSlice";
import { v4 as uuidv4 } from "uuid";
import { BurgerConstruectorCard } from "./burger-constructor-card/burger-constructor-card";
import { constructorBunSelector } from "../../../services/store/selectors/IngredientsSelector/constructorBunSelector";
import { constructorSelector } from "../../../services/store/selectors/IngredientsSelector/constructorSelector";
import { string } from "prop-types";

const BurgerConstructor = memo(function BurgerConstructor() {
  const dispatch = useDispatch();
  const draggedBun = useSelector(constructorBunSelector) as Array<object>;
  const draggedIngredients = useSelector(constructorSelector) as Array<object>;

  type TingredintsConstructor = {
    calories?: number;
    carbohydrates?: number;
    count?: number;
    fat?: number;
    image?: string;
    image_large?: string;
    image_mobile?: string;
    name?: string;
    price?: number;
    proteins?: number;
    type?: string;
    __v?: number;
    _id?: string;
    _uuid?: string;
  };


  const [{ isDropped }, refDrop] = useDrop({
    accept: "ingredient",
    drop(item: TingredintsConstructor) {
      const itemWithUuId = {
        ...item,
        _uuid: uuidv4(),
      };
      {
        item.type === "bun"
          ? dispatch(addBun(itemWithUuId))
          : dispatch(addIngredient(itemWithUuId));
      }
      console.log(item);
    },
    collect: (monitor) => ({
      isDropped: monitor.isOver(),
    }),
  });

  const [, drop] = useDrop(() => ({ accept: "card" }));

  const handleDeliteElement = useCallback((uuid: string)=> {
    dispatch(deliteIngredient(uuid));
  },[dispatch]);

  return (
    <div ref={refDrop} className={isDropped ? styles.gradient_border : ""}>
      <div className={styles.bun + " pl-6 pt-4 pb-4"}>
      {draggedBun.length>0 }      
        {draggedBun.map((item: TingredintsConstructor) => {
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
