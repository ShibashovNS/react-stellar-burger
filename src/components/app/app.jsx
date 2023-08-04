import AppHeader from "../header/app-header/app-header";
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import { useState, useEffect } from "react";
import OrderDetails from "../modal/order-details/order-details";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import Preloader from "../preloder/preloder";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";

import { Register, RegisterPage } from "./pages/register/register";
import HeaderList from "../header/header-list/header-list";
import { Route, Routes } from "react-router-dom";
import { userStatusAuth } from "../../utils/api";
import HomePage from "./pages/home";
import registerPage from "./pages/register";
import LoginPage from "./pages/login";
import PasswordPage from "./pages/forgotPassword";
import resetPasswordPage from "./pages/resetPassword";
import Profile from "./pages/profile/profile";
import Layout from "./pages/layout/layout";
import { store } from "../../services/store/store";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { Login } from "./pages/login/login";

const App = () => {
  const [isloding, setIsLoding] = useState(false);
  const ingredients = useSelector(ingredientSelector);
  const { setClickOrderList, setIsOpen } = useSelector(
    (state) => state.modalOverlay
  );
  const isClickStutusIngredient = useSelector(
    (state) => state.ingredDetails.clickStutus
  );
  const isClickStutusDetails = useSelector(
    (state) => state.orderDetails.clickStutus
  );

  const dispatch = useDispatch();

  const childForModal = () => {
    return (
      <Modal>
        {(isClickStutusDetails && <OrderDetails />) ||
          (isClickStutusIngredient && <IngredientDetails />)}
      </Modal>
    );
  };

  

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);


console.log(useSelector((store) => store.userStatus.user))

  if (ingredients.length < 1) return null;

  if (isloding) {
    return <Preloader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<OnlyUnAuth component={<Login/>} />}/>
          <Route path="/register" element={<registerPage/>} />
          <Route path="/forgot-password" element={<PasswordPage/>} />
          <Route path="/reset-password" element={<resetPasswordPage/>} />
          <Route path="/profile" element={<OnlyAuth component={<Profile/>} />} />
        </Route>
      </Routes>
      {setIsOpen && childForModal()}
    </>
  );
};

export default App;

/*
 <AppHeader />
      <Routes>
        <Route path="/" element={<AppMain />} />
      </Routes>
        {setIsOpen && childForModal()}
*/

/*<AppHeader />
      <AppMain />
      <LoginPage/>
       <RegisterPage/>
      {setIsOpen && childForModal()}*/
