import React, {FC} from "react";
import styles from "./IngredientsIcon.module.css";

export const IngredientsIcon = ({ ingredient, index, remains, shift }) => {
  const { image_mobile, name } = ingredient;
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
