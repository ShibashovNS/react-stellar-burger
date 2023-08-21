import React, {FC} from "react";
import styles from "./IngredientsIcon.module.css";
import { useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selectors/ingredientSelector";

export const IngredientsIcon = ({ ingredient, index, remains, shift }) => {
  const ingredients = useAppSelector(ingredientSelector)
  const { image_mobile, name } = ingredients.filter((item) => item._id === ingredient)[0];
  
  const style = shift ? {
    marginRight: -20,
    zIndex: 6 - index,    
  } : {
    zIndex: 1,
  };

  return (
    <div className={styles.container} style={style}>
      <img className={styles.image} src={image_mobile} alt={name} />
      {
          index === 5 && (
          <p className={`${styles.overlay +" text text_type_main-default"}`}>{`+${remains}`}</p>
        )
      }
    </div>

  );
};
