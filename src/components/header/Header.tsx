import { SearchBar } from "../searchbar/Searchbar";
import style from "./header.module.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <img src={logo} alt="Mercado Libre" width="48" height="34" />
        <SearchBar />
      </nav>
    </header>
  );
};
