import style from "../../style/Header.module.css";
import socialsData from "../../data/socials.json";
import { Icon } from "../Icon";

export default function Header() {
  return (
    <div className={style.Header}>
      <p className={style.logo}>VVH</p>
      <div className={style.icons}>
        {socialsData.map((item, key) => {
          return (
            <a key={key} className={style.iconWrapper} href={item.href}>
              <Icon name={item.name} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
