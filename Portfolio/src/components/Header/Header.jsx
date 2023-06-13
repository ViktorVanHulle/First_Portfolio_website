import style from "../../style/Header.module.css";
import socialsData from "../../data/socials.json";
import { Icon } from "../icon";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  return (
    <div className={style.Header}>
      <Link to="/" className={style.logo}>
        VVH
      </Link>
      <div className={style.navMenu}>
        <Link
          className={location.pathname === "/aboutme" ? style.activeLink : undefined}
          to="aboutme"
        >
          about
        </Link>
        <Link
          className={location.pathname === "/contactme" ? style.activeLink : undefined}
          to="contactme"
        >
          contact
        </Link>
        <Link
          className={location.pathname === "/clients" ? style.activeLink : undefined}
          to="clients"
        >
          clients
        </Link>
        <Link
          className={location.pathname === "/blog" ? style.activeLink : undefined}
          to="blog"
        >
          blog
        </Link>
      </div>
      <div className={style.icons}>
        {socialsData.map((item, key) => {
          return (
            <a key={key} href={item.href}>
              <Icon name={item.name} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
