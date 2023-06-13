import style from "../style/pagination.module.css";

export default function Pagination() {
  return (
    <div className={style.Pagination}>
      <div className={style.activePage}></div>
      <div></div>
      <div></div>
    </div>
  );
}
