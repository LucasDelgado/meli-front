import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../../models/entities/Item.entities";
import { apiService } from "../../../service/apiService";
import endpoint from "../../../service/endpoint";
import { useDispatch } from "../../../store/storeProvider";

export const useItemId = (): [number, Item] => {
  const [error, setError] = useState(0);
  const dispatch = useDispatch();
  const [itemDataSearch, setItemDataSearch] = useState<Item>({} as Item);
  const params = useParams();
  const id = params.id || "";

  useEffect(() => {
    dispatch({ type: "LOADING", value: true });
    const fetchData = async () => {
      try {
        const data = await apiService.get(endpoint.items.findOne(id));
        setItemDataSearch(data);
      } catch (error: any) {
        setError(error);
      }
      dispatch({ type: "LOADING", value: false });
    };
    fetchData();
  }, []);

  return [error, itemDataSearch];
};
