import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import style from "../style/Root.module.css";

export default function Root() {
  return (
    <div>
      <Header />
      <div className={style.Root}>
        <Outlet />
      </div>
    </div>
  );
}
