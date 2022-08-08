import { ItemOfSearch } from "../../models/entities/Items.entities";
import { ItemListDetail } from "./ItemListDetail";

type Props = {
  items: ItemOfSearch[];
};

export const ItemsList = ({ items }: Props) => {
  return (
    <div>
      {items?.map((item, key) => (
        <ItemListDetail key={key} item={item} />
      ))}
    </div>
  );
};
