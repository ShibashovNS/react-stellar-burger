import styles from "./app.module.css";
import AppHeader from "../header/app-header/app-header"
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useState } from "react";
import React, { useEffect } from "react";
import OrderDetails from "../modal/order-details/order-details";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";


function App() {

  const [isModalOpen, setIsOpen] = useState(false);
  const [dataIngredients, setData] = useState([]);
  const [imageIngredient, setImageIngredient] = useState(null);
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false)
  const [isClickOrderList, setClickOrderList] = useState(false)
  const [isClickIngredient, setClickIngredient] = useState(false)
  
  const onClick = () => {
    setIsOpen(true)
  }
  
  const childForModal = () => {
    return (
      <Modal onClick={onClick} setIsOpen={setIsOpen}>
        {isClickOrderList && <OrderDetails /> || isClickIngredient && <IngredientDetails imageIngredient={imageIngredient} />}
      </Modal>     
    )
  }

  const getData = () => {
    return (
      fetch("https://norma.nomoreparties.space/api/ingredients")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
        setData(res.data)
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен');
        })
    )
  }

    useEffect(() => {
      
      getData()
    
    }, [])

  if (dataIngredients.length < 1) return null
      
  return (
    <>
      <AppHeader setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} />
      <AppMain setClickIngredient={setClickIngredient} setIsOpen={setIsOpen} setImageIngredient={setImageIngredient} ingredients={dataIngredients} />

      {isModalOpen && (
      <> 
          {childForModal()}
          <ModalOverlay setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} />
      </>
      )}
    </>
  ); 
}

export default App;