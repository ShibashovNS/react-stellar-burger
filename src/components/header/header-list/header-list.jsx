import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-list.module.css";
import { Link, NavLink } from "react-router-dom";

function HeaderList() {
  const styleLink = (isActive) =>
    `${styles.link}${(isActive && ` ${styles.link_active}`) || ""}`;

  return (
    <nav className={styles.header_menu}>
      <ul className={styles.linkList}>
        <li className={styles.linkList_item}>
          <ul className={styles.linkList_childItem}>
            <li className={styles.linkList_item}>
              <a className={styles.header_link}>
                <BurgerIcon />
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                  styleLink(isActive) +
                    " pl-2 text_type_main-default"
                  }
                >
                  Конструктор
                </NavLink>
              </a>
            </li>

            <li className={styles.linkList_item}>
              <a className={styles.header_link}>
                <ListIcon />
                <NavLink
                  className={({ isActive }) =>
                  styleLink(isActive) +
                    " pl-2 text_type_main-default"
                  }
                >
                  Лента Заказов
                </NavLink>
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
            <NavLink
              to="/profile"
              className={({ isActive }) =>
              styleLink(isActive) + " pl-2 text_type_main-default"
              }
            >
              Личный кабинет
            </NavLink>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderList;
