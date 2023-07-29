import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-list.module.css";

function HeaderList() {
  return (
    <nav className={styles.header_menu}>
      <ul className={styles.linkList}>
        <li className={styles.linkList_item}>
          <ul className={styles.linkList_childItem}>
            <li className={styles.linkList_item}>
              <a className={styles.header_link}>
                <BurgerIcon />
                <span className="pl-2 text_type_main-default">Конструктор</span>
              </a>
            </li>

            <li className={styles.linkList_item}>
              <a className={styles.header_link}>
                <ListIcon />
                <span className="pl-2 text_type_main-default">
                  Лента Заказов
                </span>
              </a>
            </li>
          </ul>
        </li>

        <li className={styles.linkList_item}>
          <a>
            <Logo />
          </a>
        </li>

        <li className={styles.linkList_item}>
          <a className={styles.header_link}>
            <ProfileIcon type="primary" />
            <span className="pl-2 text_type_main-default">Личный кабинет</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderList;
