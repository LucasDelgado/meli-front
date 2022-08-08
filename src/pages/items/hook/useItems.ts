import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Items } from "../../../models/entities/Items.entities";
import { apiService } from "../../../service/apiService";
import endpoint from "../../../service/endpoint";
import { useDispatch } from "../../../store/storeProvider";

export const useItems = (): [number, Items] => {
  const [error, setError] = useState(0); // 0 - como false o null
  const dispatch = useDispatch();
  const [itemsDataSearch, setItemsDataSearch] = useState<Items>({} as Items);
  let [searchParams, _] = useSearchParams();

  const search = searchParams.get("q") || "";

  useEffect(() => {
    dispatch({ type: "LOADING", value: true });
    const fetchData = async () => {
      try {
        const data = await apiService.get(endpoint.items.findAll(search));
        setItemsDataSearch(data);
      } catch (error: any) {
        setError(error);
      }
      dispatch({ type: "LOADING", value: false });
    };
    fetchData();
  }, [search]);

  return [error, itemsDataSearch];
};
