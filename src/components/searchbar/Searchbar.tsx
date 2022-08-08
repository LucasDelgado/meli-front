import style from "./searchbar.module.scss";

import { useSearchBar } from "./hook/useSearchBar";
import { LupaSVG } from "../../svgs";

export const SearchBar = () => {
  const [searchValue, handleChange, handleSubmit] = useSearchBar();
  return (
    <form className={style.searchBar} aria-label="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className={`${style.searchBar__input} font-m`}
        value={searchValue}
        onChange={handleChange}
      />
      <button className={style.searchBar__button} type="submit">
        {" "}
        <LupaSVG />{" "}
      </button>
    </form>
  );
};
