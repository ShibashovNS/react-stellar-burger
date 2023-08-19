import styles from "./order-stats.module.css";
export function OrderStats() {
  return (
    <section>
      <div className={styles.container}>
        <div>
          <p className={"text text_type_main-medium"}>Готовы:</p>
          <p>034533</p>
          <p>034533</p>
          <p>034533</p>
          <p>034533</p>
          <p>034533</p>
        </div>
        <div>
          <p className={"text text_type_main-medium"}>В работе:</p>
          <p>034538</p>
          <p>034538</p>
          <p>034538</p>
          <p>034538</p>
        </div>
      </div>
      <div>
        <p className={"text text_type_main-medium mt-15"}>
          Выполнено за все время:
        </p>
        <p className={styles.shadow + ` text text_type_digits-large`}>28 752</p>
      </div>
      <div>
        <p className={"text text_type_main-medium mt-15"}>
          Выполнено за сегодня
        </p>
        <p className={styles.shadow + ` text text_type_digits-large`}>138</p>
      </div>
    </section>
  );
}
