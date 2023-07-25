import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { data } from '../../../utils/data';
import { addBun, addIngredient, deliteIngredient, removeList } from '../../../services/store/reducers/burgerConstructorSlice';
import { v4 as uuidv4 } from 'uuid';
import { useMemo, useCallback } from 'react';
import { counter } from '../../../services/store/reducers/ingredientDetails';

const BurgerConstructor = ({ ingredient, index }) => {

  const dispatch = useDispatch();
  const {draggedBun, draggedIngredients} = useSelector(state => state.constIngredient)
  const { selctIngredient, clickStutus, count} = useSelector(state => state.ingredDetails)

  
  const {
    bun,
    ingredients,
    isLoding,
  } = useSelector(state => state.ingredients);

  const [, refDrop] = useDrop({
    accept: "ingredient",
    drop(item) {
      const ItemWithUuId = {
        ...item,
        _uuid: uuidv4(), 
      };
    
      { item.type === 'bun' ? dispatch(addBun(ItemWithUuId)) : (dispatch(addIngredient(ItemWithUuId))) };
    }
  }) 

  const handleDeliteElement = useCallback((uuid) => {
    dispatch(deliteIngredient(uuid))
  })

  return (
    <div ref={refDrop}>
      <div className={' pl-6 pt-4 pb-4'} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {draggedBun.map((item) => {
          return (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={draggedBun[0].name + ' (Верх)'}
              price={draggedBun[0].price}
              thumbnail={draggedBun[0].image}
              key={draggedBun[0]._uuid}
            />
          )
        })
        }
      </div>


      <div className={styles.itemMidle + " custom-scroll pr-2"} style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
        {draggedIngredients.map((item) => {
          return (
            <div key={item._uuid} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <DragIcon/>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={() => handleDeliteElement(item._uuid)}
              />
            </div>
          )
          })
        }
      </div >
      
      <div className={"pl-6 pt-4"} style={{ display: 'flex', flexDirection: 'column', gap: '10px'}} >
      {draggedBun.map((item) => {
          return (
            <ConstructorElement
            type="bottom"
            isLocked={true}
            text={draggedBun[0].name + ' (Низ)'}
            price={draggedBun[0].price}
            thumbnail={draggedBun[0].image}
            key={draggedBun[0]._uuid}
        />
          )
        })
        }
      </div>
    </div>
  )
}
  
export default BurgerConstructor