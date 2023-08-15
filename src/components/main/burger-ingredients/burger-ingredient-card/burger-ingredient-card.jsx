import styles from "./burger-ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/hooks/hooks";
import { clickOpen } from "../../../../services/store/reducers/modalOverlaySlice";
import {
  addIngredDetails,
  clickIngredient,
  counter,
} from "../../../../services/store/reducers/ingredientDetails";
import { useDrag } from "react-dnd";

function IngredientCard({ ingredient }) {
  const [, refDrag] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(clickIngredient(true));
    dispatch(addIngredDetails(ingredient));
    dispatch(clickOpen(true));
  };

  return (
    <div className={styles.card} ref={refDrag} draggable>
      {ingredient.count > 0 && (
        <Counter
          count={
            ingredient.type === "bun" ? ingredient.count * 2 : ingredient.count
          }
        />
      )}
      <img className={styles.image} src={ingredient.image} onClick={onClick} />
      <span className={"text_type_main-default pt-1 " + styles.price}>
        {ingredient.price}
        <CurrencyIcon />
      </span>
      <p className={"text_type_main-default " + styles.name + " pt-1"}>
        {ingredient.name}
      </p>
    </div>
  );
}

export default IngredientCard;
