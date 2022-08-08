import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchBar = (): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
] => {
  //Utilizamos el hook useState para manejar el estado de la búsqueda.
  //de esta forma es lo que se dice un form/input controlado. Ya que maenajmos todo por react.
  // se podria no utilizarlo y manejar el value por el propio DOM (no controlado), pero no es recomendable.

  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Valor vacio?
    if (!!!searchValue)
      return window.alert("Ingrese un valor para la búsqueda");
    //Redirect pagina de resultados
    navigate(`/items?q=${searchValue}`);
  };

  return [searchValue, handleChange, handleSubmit];
};
