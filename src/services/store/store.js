import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/burgerIngredientsSlice";
import constructorReducer from "./reducers/burgerConstructorSlice";
import ingredDetailsReducer from "./reducers/ingredientDetails";
import orderDetailsReducer from "./reducers/orderDetailsSlice";
import modalOverlayReducer from './reducers/modalOverlaySlice'
import ingredientsTabReducer from './reducers/ingredientsTab'



export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constIngredient: constructorReducer,
    ingredDetails: ingredDetailsReducer,
    orderDetails: orderDetailsReducer,
    modalOverlay: modalOverlayReducer,
    ingredientsTab: ingredientsTabReducer,
  },
});
