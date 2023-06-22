import PropTypes from "prop-types";
import style from "../style/pagination.module.css";

// TO DO: change amountOfPages to an array of the existing routes
export default function Pagination({ amountOfPages, currentPage }) {
  const changePage = (e) => {
    console.log("change page", e);
  };

  return (
    <div className={style.Pagination} onClick={changePage}>
      {Array.from(Array(amountOfPages).keys()).map((e, i) => {
        return (
          <div
            className={i === currentPage && style.activePage}
            key={i}
            onClick={changePage}
          >
            <div></div>
          </div>
        );
      })}
    </div>
  );
}

Pagination.propTypes = {
  amountOfPages: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};
