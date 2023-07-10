import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients_tab.module.css"

function BurgerIngingredientsTab() {

  const [current, setCurrent] = React.useState('one')

  return (
  <>
    <h1 className={styles.main_title + " text_type_main-large" + ' pt-10 pb-5'}>Соберите бургер</h1>

    <div style={{ display: 'flex' }} className={'pb-10'}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  </>
  )  
}

export default BurgerIngingredientsTab 