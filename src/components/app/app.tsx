import Modal from "../modal/modal";
import { useState, useEffect } from "react";
import OrderDetails from "../modal/order-details/order-details";
import Preloader from "../preloder/preloder";
import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Layout from "../pages/layout/layout";
import HomePage from "../pages/home";
import { Register } from "../pages/register/register";
import PasswordPage from "../pages/forgotPassword";
import Profile from "../pages/profile/profile";
import { Login } from "../pages/login/login";
import ResetPassword from "../pages/reset-password/reset-password";
import { UserForm } from "../pages/userForm/userForm";
import OrdersPage from "../pages/orders/orders";
import IngredientDetailsSingle from "../pages/ingredient-details-single/ingredient-details-single";
import { checkUserAuth, getUser } from "../../utils/api";
import NotFound from "../pages/not-found/non-found";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

const App = () => {
  const [isloding, setIsLoding] = useState(false);
  const ingredients = useAppSelector(ingredientSelector);

  const isClickStutusDetails = useAppSelector(
    (state: any) => state.orderDetails.clickStutus
  ) as boolean;

  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch = useAppDispatch();

  const childForModal = () => {
    return <Modal>{isClickStutusDetails && <OrderDetails />}</Modal>;
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(checkUserAuth());
    dispatch(getUser());
  }, [dispatch]);

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
          <Route
            path="/register"
            element={<OnlyUnAuth component={<Register />} />}
          />
          <Route
            path="/forgot-password"
            element={<OnlyUnAuth component={<PasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<OnlyUnAuth component={<ResetPassword />} />}
          />
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<UserForm />} />
            <Route path={"/profile/orders"} element={<OrdersPage />} />
          </Route>
          <Route
            path={"profile/orders/:id"}
            element={<IngredientDetailsSingle />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="profile/orders/:id"
            element={
              <Modal>
                {" "}
                <IngredientDetailsSingle isSinglePage={false} />
              </Modal>
            }
          />
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
