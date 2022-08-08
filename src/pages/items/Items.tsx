import { Breadcumb } from "../../components/breadcumb/Breadcumb";
import { ErrorHandler } from "../../components/errorHandler/ErrorHandler";
import { ItemsList } from "../../components/items/ItemsList";
import { useItems } from "./hook/useItems";

export const Items = () => {
  const [error, itemsDataSearch] = useItems();
  const { items, categories } = itemsDataSearch || {};

  if (error) {
    return <ErrorHandler status={error} />;
  }

  return (
    <>
      {categories?.length > 0 && (
        <Breadcumb categories={itemsDataSearch.categories} />
      )}
      <section>
        {items?.length === 0 ? (
          <div>No hay resultados</div>
        ) : (
          <ItemsList items={itemsDataSearch.items} />
        )}
      </section>
    </>
  );
};
