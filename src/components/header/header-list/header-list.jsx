import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-list.module.css";
import { Link } from "react-router-dom";

function HeaderList() {
  return (
    <nav className={styles.header_menu}>
      <ul className={styles.linkList}>
        <li className={styles.linkList_item}>
          <ul className={styles.linkList_childItem}>
            <li className={styles.linkList_item}>
              <a className={styles.header_link}>
                <BurgerIcon />
                <Link to='/' className="pl-2 text_type_main-default">Конструктор</Link>
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
            <Link to='/profile' className="pl-2 text_type_main-default">Личный кабинет</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderList;
