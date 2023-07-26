import styles from "./app.module.css";
import AppHeader from "../header/app-header/app-header"
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useState, useEffect } from "react";
import OrderDetails from "../modal/order-details/order-details";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import Preloader from "../preloder/preloder";
import { useDispatch, useSelector } from "react-redux";
import { ingredientsUpload, ingredientsUploadError, ingredientsUploading } from "../../services/store/reducers/burgerIngredientsSlice";
import { store } from "../../services/store/store";
import { Provider } from "react-redux";
import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { data } from "../../utils/data";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { clickOpen } from "../../services/store/reducers/modalOverlaySlice";
import { detailsSelector } from "../../services/store/selectors/detailsSelector";
import { v4 as uuidv4 } from 'uuid';
import { constructorSelector } from "../../services/store/selectors/IngredientsSelector/constructorSelector";
import { memoIngredientsSelector } from "../../services/store/selectors/memoIngredientSelector";
import { constructorBunSelector } from "../../services/store/selectors/IngredientsSelector/constructorBunSelector";
import { setDetails } from "../../services/store/reducers/detailsQuery";


const App = () => {

  const [isloding, setIsLoding] = useState(false);
  const ingredients = useSelector(ingredientSelector)
  const {setClickOrderList, setIsOpen } = useSelector(state => state.modalOverlay) 
  const isClickStutusIngredient = useSelector(state => state.ingredDetails.clickStutus)
  const isClickStutusDetails = useSelector(state => state.orderDetails.clickStutus)
 
  const dispatch = useDispatch();

  
  const childForModal = () => {
    return (
      <Modal>
        {(isClickStutusDetails && <OrderDetails />) || (isClickStutusIngredient && <IngredientDetails/>)}
      </Modal>
    )
  }
/*
  const getData = async () => {
    try {
      dispatch(ingredientsUploading());
      const res = fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      const base = await res.json();
      dispatch(ingredientsUpload(base));
    } catch (err) {
      dispatch(ingredientsUploadError(err.massage))
    };
  } */

    /*
    const getData = () => {
      setIsLoding(true)
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
          .then(() => {
            setIsLoding(false)
          })
      )
    }
  */
  
  
    useEffect(() => {
      dispatch(fetchIngredients());
    }, [])
    
    /*const {draggedBun, draggedIngredients} = useSelector(state => state.constIngredient)*/

  if (ingredients.length < 1) return null

    if (isloding) {
      return (
        <Preloader />
      )
    }

    return (
      <>
        <AppHeader />
        <AppMain />
        {setIsOpen && (
          <>
            {childForModal()}
          </>
        )}
      </>
    );
  }

export default App;