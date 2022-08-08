import { Autor } from "./Autor.entities";
import { Item } from "./Item.entities";

export interface ItemOfSearch
  extends Omit<Item, "sold_quantity" | "description"> {
  address: string;
}

export interface Items {
  autor: Autor;
  items: ItemOfSearch[];
  categories: string[];
}
