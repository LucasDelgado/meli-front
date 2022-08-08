import { ErrorHandler } from "../../components/errorHandler/ErrorHandler";
import { ItemIdDetail } from "../../components/itemId/ItemIdDetail";
import { useItemId } from "./hook/useItemId";

export const ItemId = () => {
  const [error, itemDataSearch] = useItemId();

  if (error) {
    return <ErrorHandler status={error} />;
  }
  return (
    <section>
      <ItemIdDetail item={itemDataSearch} />
    </section>
  );
};
