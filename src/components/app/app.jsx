import AppHeader from "../header/app-header/app-header"
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import { useState, useEffect } from "react";
import OrderDetails from "../modal/order-details/order-details";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import Preloader from "../preloder/preloder";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";



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

    useEffect(() => {
      dispatch(fetchIngredients());
    }, [])
  
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