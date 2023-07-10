import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ingredient, index}) => {
  return (
    <div>
      <div className={' pl-6 pt-4 pb-4'} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={'1255'}
          thumbnail={ingredient[index].image}
        />
        
      </div>
      <div className={styles.itemMidle + " custom-scroll pr-2"} style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
        {ingredient.map((item) => {
          return (
            <div key={item._id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <DragIcon/>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
              />
            </div>
          )
          })
        }
      </div >
      <div className={"pl-6 pt-4"} style={{ display: 'flex', flexDirection: 'column', gap: '10px'}} >
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={ingredient[index].image}
        />
      </div>
    </div>
  )
}
  
export default BurgerConstructor