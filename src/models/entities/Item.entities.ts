import { Autor } from "./Autor.entities";

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  autor: Autor;
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: Boolean;
  sold_quantity: number;
  description?: string;
}
