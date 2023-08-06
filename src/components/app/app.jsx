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

import HeaderList from "../header/header-list/header-list";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { store } from "../../services/store/store";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Layout from "../pages/layout/layout";
import HomePage from "../pages/home";
import { Register } from "../pages/register/register";
import PasswordPage from "../pages/forgotPassword";
import resetPasswordPage from "../pages/resetPassword";
import Profile from "../pages/profile/profile";
import { Login } from "../pages/login/login";
import ResetPassword from "../pages/reset-password/reset-password";
import { UserForm } from "../pages/userForm/userForm";
import OrdersPage from "../pages/orders/orders";
import { memoIngredientsSelector } from "../../services/store/selectors/memoIngredientSelector";
import IngredientDetailsSingle from "../pages/ingredient-details-single/ingredient-details-single";

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

  const location = useLocation();
  const background = location.state && location.state.background;
  console.log(background);

  const dispatch = useDispatch();
  console.log(useLocation());

  const childForModal = () => {
    return (
      <Modal>
        {(isClickStutusDetails && <OrderDetails />)}
      </Modal>
    );
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  console.log(useSelector(memoIngredientsSelector));

  if (ingredients.length < 1) return null;

  if (isloding) {
    return <Preloader />;
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/register" element={<OnlyUnAuth component= {<Register/>} />} />
          <Route path="/forgot-password" element={<OnlyUnAuth component ={<PasswordPage />}/>} />
          <Route path="/reset-password" element={<OnlyUnAuth component ={<ResetPassword />}/>} />
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<UserForm />} />
            <Route path={"/profile/orders"} element={<OrdersPage />} />
          </Route>
          <Route
            path={"profile/orders/:id"}
            element={<IngredientDetailsSingle />}
          />
          <Route path="*" element={null} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="profile/orders/:id" element={<Modal> <IngredientDetailsSingle isSinglePage={false} /></Modal>} />
        </Routes>
      )}
      {isClickStutusDetails && childForModal()}
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
